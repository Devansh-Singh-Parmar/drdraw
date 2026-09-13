require("dotenv").config();
const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const { v4: uuidv4 } = require("uuid");
const { getRandomWords } = require("./words");
const { createWordHint, generateHint } = require("./utils/utils");

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
    credentials: true,
  },
  transports: ["websocket", "polling"],
  pingTimeout: 60000,
  pingInterval: 25000,
  maxHttpBufferSize: 1e6,
  allowEIO3: true,
});

const WORD_SELECTION_TIME = 10000;
const POINTS = {
  DRAWER: 300,
  FIRST_GUESS: 150,
  OTHER_GUESS: 100,
};
const MESSAGE_LIMIT = 5;
const MESSAGE_TIME_WINDOW = 3000;

const rooms = new Map();
const roomTimers = new Map();

const generateRoomCode = () => {
  let code;
  do {
    code = Math.random().toString(36).substring(2, 8).toUpperCase();
  } while (rooms.has(code));
  return code;
};

const createRoom = (hostName, playerId, socketId) => {
  const code = generateRoomCode();
  return {
    code,
    host: playerId,
    players: [
      {
        id: playerId,
        socketId: socketId,
        name: hostName,
        score: 0,
        status: "online",
        hasGuessed: false,
      },
    ],
    settings: {
      maxPlayers: 8,
      roundDuration: 60,
      maxRounds: 3,
      difficulty: "easy",
    },
    messages: [],
    currentDrawer: null,
    currentDrawerIndex: -1,
    currentWord: null,
    wordOptions: [],
    gameStarted: false,
    gamePhase: "lobby",
    round: 0,
    drawingData: [],
    correctGuessers: [],
    turnStartTime: null,
  };
};

const clearRoomTimers = (roomCode) => {
  const timers = roomTimers.get(roomCode);
  if (timers) {
    Object.values(timers).forEach((timer) => clearTimeout(timer));
    roomTimers.delete(roomCode);
  }
};

const startNextTurn = (roomCode) => {
  const room = rooms.get(roomCode);
  if (!room) return;

  room.drawingData = [];
  room.correctGuessers = [];
  room.currentWord = null;
  room.players.forEach((p) => (p.hasGuessed = false));

  io.to(roomCode).emit("clear-canvas");

  room.currentDrawerIndex++;

  if (room.currentDrawerIndex >= room.players.length) {
    room.currentDrawerIndex = -1;
    room.round++;

    if (room.round >= room.settings.maxRounds) {
      endGame(roomCode);
      return;
    }

    room.gamePhase = "round-end";
    io.to(roomCode).emit("round-end", {
      round: room.round,
      players: room.players,
    });

    const timer = setTimeout(() => {
      startNextTurn(roomCode);
    }, 5000);

    if (!roomTimers.has(roomCode)) roomTimers.set(roomCode, {});
    roomTimers.get(roomCode).roundEnd = timer;
    return;
  }

  let currentDrawer = room.players[room.currentDrawerIndex];

  let attempts = 0;
  while (currentDrawer.status === "offline" && attempts < room.players.length) {
    console.log(`Skipping offline player: ${currentDrawer.name}`);

    room.currentDrawerIndex++;
    attempts++;

    if (room.currentDrawerIndex >= room.players.length) {
      room.currentDrawerIndex = -1;
      room.round++;

      if (room.round >= room.settings.maxRounds) {
        endGame(roomCode);
        return;
      }

      room.gamePhase = "round-end";
      io.to(roomCode).emit("round-end", {
        round: room.round,
        players: room.players,
      });

      const timer = setTimeout(() => {
        startNextTurn(roomCode);
      }, 5000);

      if (!roomTimers.has(roomCode)) roomTimers.set(roomCode, {});
      roomTimers.get(roomCode).roundEnd = timer;
      return;
    }

    currentDrawer = room.players[room.currentDrawerIndex];
  }

  if (attempts >= room.players.length) {
    console.log(`All players offline in room ${roomCode}. Ending game.`);
    endGame(roomCode);
    return;
  }

  room.currentDrawer = currentDrawer.id;

  room.wordOptions = getRandomWords(room.settings.difficulty);
  room.gamePhase = "word-selection";
  room.turnStartTime = Date.now();

  io.to(roomCode).emit("turn-start", {
    drawerId: currentDrawer.id,
    drawerName: currentDrawer.name,
    round: room.round + 1,
    maxRounds: room.settings.maxRounds,
  });

  const drawerSocket = io.sockets.sockets.get(currentDrawer.socketId);
  if (drawerSocket) {
    drawerSocket.emit("word-options", {
      words: room.wordOptions,
      timeLimit: WORD_SELECTION_TIME,
    });
  }

  const timer = setTimeout(async () => {
    const currentRoom = rooms.get(roomCode);
    if (
      currentRoom &&
      currentRoom.gamePhase === "word-selection" &&
      !currentRoom.currentWord
    ) {
      const randomWord =
        currentRoom.wordOptions[
          Math.floor(Math.random() * currentRoom.wordOptions.length)
        ];
      await selectWord(roomCode, randomWord);
    }
  }, WORD_SELECTION_TIME);

  if (!roomTimers.has(roomCode)) roomTimers.set(roomCode, {});
  roomTimers.get(roomCode).wordSelection = timer;
};

const selectWord = async (roomCode, word) => {
  const room = rooms.get(roomCode);
  if (!room || room.gamePhase !== "word-selection") return;

  const timers = roomTimers.get(roomCode);
  if (timers && timers.wordSelection) {
    clearTimeout(timers.wordSelection);
  }

  room.currentWord = word;
  room.gamePhase = "drawing";
  room.turnStartTime = Date.now();

  const wordHint = createWordHint(word);
  const ai_hint = await generateHint(word);

  const DRAWING_TIME = room.settings.roundDuration * 1000;

  io.to(roomCode).emit("drawing-phase-start", {
    wordLength: word.length,
    wordHint: wordHint,
    aiHint: ai_hint,
    timeLimit: DRAWING_TIME,
  });

  const drawer = room.players.find((p) => p.id === room.currentDrawer);
  if (drawer) {
    const drawerSocket = io.sockets.sockets.get(drawer.socketId);
    if (drawerSocket) {
      drawerSocket.emit("your-word", { word });
    }
  }

  const timer = setTimeout(() => {
    endTurn(roomCode);
  }, DRAWING_TIME);

  if (!roomTimers.has(roomCode)) roomTimers.set(roomCode, {});
  roomTimers.get(roomCode).drawing = timer;
};

const endTurn = (roomCode) => {
  const room = rooms.get(roomCode);
  if (!room || room.gamePhase !== "drawing") return;

  const timers = roomTimers.get(roomCode);
  if (timers && timers.drawing) {
    clearTimeout(timers.drawing);
  }

  room.gamePhase = "turn-end";

  io.to(roomCode).emit("turn-end", {
    word: room.currentWord,
    correctGuessers: room.correctGuessers,
    players: room.players,
  });

  const timer = setTimeout(() => {
    startNextTurn(roomCode);
  }, 5000);

  if (!roomTimers.has(roomCode)) roomTimers.set(roomCode, {});
  roomTimers.get(roomCode).turnEnd = timer;
};

const endGame = (roomCode) => {
  const room = rooms.get(roomCode);
  if (!room) return;

  clearRoomTimers(roomCode);

  room.gamePhase = "game-end";
  room.gameStarted = false;

  const leaderboard = [...room.players].sort((a, b) => b.score - a.score);

  io.to(roomCode).emit("game-end", {
    leaderboard,
    winner: leaderboard[0],
  });

  setTimeout(() => {
    const currentRoom = rooms.get(roomCode);
    if (!currentRoom) return;

    const onlinePlayers = currentRoom.players.filter(
      (p) => p.status === "online",
    );
    console.log(
      `Room ${roomCode}: Removing ${currentRoom.players.length - onlinePlayers.length} offline players`,
    );

    onlinePlayers.forEach((p) => {
      p.score = 0;
      p.hasGuessed = false;
    });

    currentRoom.players = onlinePlayers;

    currentRoom.currentDrawer = null;
    currentRoom.currentDrawerIndex = -1;
    currentRoom.currentWord = null;
    currentRoom.wordOptions = [];
    currentRoom.gamePhase = "lobby";
    currentRoom.round = 0;
    currentRoom.drawingData = [];
    currentRoom.correctGuessers = [];
    currentRoom.turnStartTime = null;

    if (onlinePlayers.length === 0) {
      console.log(`Room ${roomCode}: No players remaining. Deleting room.`);
      clearRoomTimers(roomCode);
      rooms.delete(roomCode);
      return;
    }

    const hostExists = onlinePlayers.find((p) => p.id === currentRoom.host);
    if (!hostExists && onlinePlayers.length > 0) {
      currentRoom.host = onlinePlayers[0].id;
      console.log(
        `Room ${roomCode}: New host assigned to ${onlinePlayers[0].name}`,
      );
    }

    io.to(roomCode).emit("game-reset", {
      players: currentRoom.players,
      hostId: currentRoom.host,
      settings: currentRoom.settings,
      message: "Game ended! Ready to play again?",
    });

    console.log(
      `Room ${roomCode}: Game reset. ${onlinePlayers.length} players remaining.`,
    );
  }, 10000);
};

const checkGuess = (roomCode, playerId, guess, timeLeft) => {
  const room = rooms.get(roomCode);
  if (!room || room.gamePhase !== "drawing") return false;

  const player = room.players.find((p) => p.id === playerId);
  if (!player) return false;

  if (playerId === room.currentDrawer) return false;

  if (player.hasGuessed) return false;
  if (typeof guess !== "string") return false;

  const isCorrect =
    guess.toLowerCase().trim() === room.currentWord.toLowerCase();
  if (!isCorrect) return false;

  player.hasGuessed = true;

  const roundDurationSec = room.settings.roundDuration;
  const elapsedSec = Math.min(
    roundDurationSec,
    Math.max(0, (Date.now() - room.turnStartTime) / 1000),
  );
  const timeLeftSec = Math.max(0, roundDurationSec - elapsedSec);
  const timePenalty = Math.max(0, Math.ceil(elapsedSec / 2));

  if (room.correctGuessers.length === 0) {
    player.score += Math.max(0, POINTS.FIRST_GUESS - timePenalty);

    const drawer = room.players.find((p) => p.id === room.currentDrawer);
    if (drawer) {
      const roundDurationSec = room.settings.roundDuration;
      const speedRatio = Math.max(
        0,
        Math.min(1, timeLeftSec / roundDurationSec),
      );
      drawer.score += Math.round(POINTS.DRAWER * speedRatio);
    }
  } else {
    player.score += Math.max(0, POINTS.OTHER_GUESS - timePenalty);
  }

  room.correctGuessers.push({
    playerId: player.id,
    playerName: player.name,
    time: Date.now() - room.turnStartTime,
  });

  io.to(roomCode).emit("correct-guess", {
    playerId: player.id,
    playerName: player.name,
    players: room.players,
  });

  const nonDrawerPlayers = room.players.filter(
    (p) => p.id !== room.currentDrawer,
  );
  const allGuessed = nonDrawerPlayers.every((p) => p.hasGuessed);
  if (allGuessed) {
    endTurn(roomCode);
  }

  return true;
};

const messageHistory = new Map();

function canSendMessage(userId) {
  const now = Date.now();
  const history = messageHistory.get(userId) || [];

  const recent = history.filter((ts) => now - ts < MESSAGE_TIME_WINDOW);

  if (recent.length >= MESSAGE_LIMIT) {
    return false;
  }

  recent.push(now);
  messageHistory.set(userId, recent);
  return true;
}

const cleanupMessageHistory = (userId) => {
  setTimeout(
    () => {
      messageHistory.delete(userId);
    },
    5 * 60 * 1000,
  );
};

const voiceChatUsers = new Map();

const getVoiceUsers = (roomCode) => {
  if (!voiceChatUsers.has(roomCode)) {
    voiceChatUsers.set(roomCode, new Set());
  }
  return voiceChatUsers.get(roomCode);
};

const addVoiceUser = (roomCode, socketId) => {
  const users = getVoiceUsers(roomCode);
  users.add(socketId);
};

const removeVoiceUser = (roomCode, socketId) => {
  const users = getVoiceUsers(roomCode);
  users.delete(socketId);

  if (users.size === 0) {
    voiceChatUsers.delete(roomCode);
  }
};

const isInVoiceChat = (roomCode, socketId) => {
  const users = getVoiceUsers(roomCode);
  return users.has(socketId);
};

io.on("connection", (socket) => {
  console.log("User connected: ", socket.id);

  socket.on("create-room", ({ playerName }) => {
    const playerId = uuidv4();
    const room = createRoom(playerName, playerId, socket.id);

    rooms.set(room.code, room);
    socket.join(room.code);

    socket.emit("room-created", {
      code: room.code,
      player: room.players[0],
      settings: room.settings,
    });

    console.log(`Room ${room.code} created by ${playerName}`);
  });

  socket.on("join-room", ({ code, playerName }) => {
    const room = rooms.get(code);

    if (!room) {
      socket.emit("error", { message: "Room not found" });
      return;
    }

    if (room.players.length >= room.settings.maxPlayers) {
      socket.emit("error", { message: "Room is full" });
      return;
    }

    if (room.gameStarted) {
      socket.emit("error", { message: "Game already started" });
      return;
    }

    const playerId = uuidv4();
    const player = {
      id: playerId,
      socketId: socket.id,
      name: playerName,
      score: 0,
      status: "online",
      hasGuessed: false,
    };

    room.players.push(player);

    socket.join(code);
    socket.emit("room-joined", {
      room,
      player,
    });

    io.to(code).emit("player-joined", {
      player: player,
      players: room.players,
    });

    socket.emit("load-drawing", room.drawingData);
    socket.emit("chat-history", room.messages);

    console.log(`${playerName} joined room ${code}`);
  });

  socket.on("reconnect-room", ({ code, playerId }) => {
    const room = rooms.get(code);

    if (!room) {
      socket.emit("error", { message: "Room not found" });
      return;
    }

    const playerIndex = room.players.findIndex((p) => p.id === playerId);
    if (playerIndex === -1) {
      socket.emit("error", { message: "Player not found in room" });
      return;
    }

    room.players[playerIndex].socketId = socket.id;
    room.players[playerIndex].status = "online";
    const player = room.players[playerIndex];

    socket.join(code);

    socket.emit("room-reconnected", {
      room,
      player,
    });

    socket.to(code).emit("player-status-changed", {
      playerId: player.id,
      status: "online",
      players: room.players,
    });

    socket.emit("chat-history", room.messages);
    socket.emit("load-drawing", room.drawingData);

    if (room.gameStarted) {
      let wordHint = null;

      if (room.currentWord && room.gamePhase === "drawing") {
        wordHint = createWordHint(room.currentWord);
      }

      socket.emit("game-state-sync", {
        gamePhase: room.gamePhase,
        currentDrawer: room.currentDrawer,
        round: room.round,
        maxRounds: room.settings.maxRounds,
        wordHint: wordHint,
        players: room.players,
      });

      if (player.id === room.currentDrawer && room.currentWord) {
        socket.emit("your-word", { word: room.currentWord });
      }
    }

    console.log(`${player.name} reconnected to room ${code}`);
  });

  socket.on("update-settings", ({ roomCode, settings }) => {
    const room = rooms.get(roomCode);

    if (!room) {
      socket.emit("error", { message: "Room not found" });
      return;
    }

    const player = room.players.find((p) => p.socketId === socket.id);
    if (!player || player.id !== room.host) {
      socket.emit("error", { message: "Only host can update settings" });
      return;
    }

    if (room.gameStarted) {
      socket.emit("error", { message: "Cannot update settings during game" });
      return;
    }

    const { maxPlayers, roundDuration, maxRounds, difficulty } = settings;

    if (maxPlayers && maxPlayers >= 4 && maxPlayers <= 10) {
      if (maxPlayers >= room.players.length) {
        room.settings.maxPlayers = maxPlayers;
      } else {
        socket.emit("error", {
          message: `Cannot set max players below current player count (${room.players.length})`,
        });
        return;
      }
    }

    if (roundDuration && [30, 60, 90, 120].includes(roundDuration)) {
      room.settings.roundDuration = roundDuration;
    }

    if (maxRounds && maxRounds >= 3 && maxRounds <= 8) {
      room.settings.maxRounds = maxRounds;
    }

    if (difficulty && ["easy", "medium", "hard"].includes(difficulty)) {
      room.settings.difficulty = difficulty;
    }

    io.to(roomCode).emit("settings-updated", {
      settings: room.settings,
      updatedBy: player.name,
    });
  });

  socket.on("start-game", ({ roomCode }) => {
    const room = rooms.get(roomCode);

    if (!room) {
      socket.emit("error", { message: "Room not found" });
      return;
    }

    const player = room.players.find((p) => p.socketId === socket.id);
    if (!player || player.id !== room.host) {
      socket.emit("error", { message: "Only host can start the game" });
      return;
    }

    if (room.players.length < 2) {
      socket.emit("error", { message: "Need at least 2 players to start" });
      return;
    }

    room.gameStarted = true;
    room.round = 0;
    room.currentDrawerIndex = -1;

    room.players.forEach((p) => {
      p.score = 0;
      p.hasGuessed = false;
    });

    io.to(roomCode).emit("game-started", {
      maxRounds: room.settings.maxRounds,
    });

    setTimeout(() => {
      startNextTurn(roomCode);
    }, 3000);

    console.log(`Game started in room ${roomCode}`);
  });

  socket.on("leave-room", ({ roomCode }) => {
    const room = rooms.get(roomCode);
    if (!room) {
      socket.emit("error", { message: "Room not found" });
      return;
    }

    const playerIndex = room.players.findIndex((p) => p.socketId === socket.id);
    if (playerIndex === -1) {
      socket.emit("error", { message: "Player not found in room" });
      return;
    }

    const player = room.players[playerIndex];
    const wasHost = player.id === room.host;
    const wasDrawing = player.id === room.currentDrawer;

    cleanupMessageHistory(player.id);

    if (isInVoiceChat(roomCode, socket.id)) {
      removeVoiceUser(roomCode, socket.id);
      io.to(roomCode).emit("voice-user-left", {
        playerId: player.id,
        socketId: socket.id,
      });
    }

    room.players.splice(playerIndex, 1);

    console.log(
      `${player.name} left room ${roomCode}. ${room.players.length} players remaining.`,
    );

    socket.leave(roomCode);

    socket.emit("left-room", {
      message: "You have left the room",
      redirect: true,
    });

    if (room.players.length === 0) {
      console.log(`Room ${roomCode} is now empty. Deleting room.`);
      clearRoomTimers(roomCode);
      rooms.delete(roomCode);
      return;
    }

    if (wasHost) {
      room.host = room.players[0].id;
      console.log(`New host in room ${roomCode}: ${room.players[0].name}`);
    }

    if (wasDrawing && room.gameStarted && room.gamePhase === "drawing") {
      console.log(`Current drawer left. Ending turn early.`);
      endTurn(roomCode);
    }

    io.to(roomCode).emit("player-left", {
      playerName: player.name,
      players: room.players,
      hostId: room.host,
      wasDrawing: wasDrawing,
    });

    if (room.gameStarted && room.players.length < 2) {
      console.log(`Only 1 player remaining in room ${roomCode}. Ending game.`);

      clearRoomTimers(roomCode);

      room.gameStarted = false;
      room.gamePhase = "lobby";
      room.currentDrawer = null;
      room.currentDrawerIndex = -1;
      room.round = 0;
      room.drawingData = [];
      room.correctGuessers = [];

      room.players.forEach((p) => {
        p.score = 0;
        p.hasGuessed = false;
      });

      io.to(roomCode).emit("game-ended-insufficient-players", {
        message: "Game ended: Not enough players",
        players: room.players,
        hostId: room.host,
      });
    }
  });

  socket.on("select-word", async ({ roomCode, word }) => {
    const room = rooms.get(roomCode);
    if (!room) return;

    const player = room.players.find((p) => p.socketId === socket.id);
    if (!player || player.id !== room.currentDrawer) return;

    if (!room.wordOptions.includes(word)) return;

    await selectWord(roomCode, word);
  });

  socket.on("fetch-players", ({ roomId }) => {
    const room = rooms.get(roomId);

    if (!room) {
      socket.emit("error", { message: "Room not found" });
      return;
    }

    socket.emit("all-players", {
      players: room.players,
      hostId: room.host,
    });
  });

  socket.on("fetch-chat", ({ roomId }) => {
    const room = rooms.get(roomId);
    if (!room) return;

    socket.emit("chat-history", room.messages);
  });

  socket.on("fetch-settings", ({ roomId }) => {
    const room = rooms.get(roomId);
    if (!room) {
      socket.emit("error", { message: "Room not found" });
      return;
    }

    socket.emit("settings-data", {
      settings: room.settings,
      hostId: room.host,
    });
  });

  socket.on("send-message", ({ roomCode, message, senderName }) => {
    const room = rooms.get(roomCode);
    if (!room) return;

    const player = room.players.find((p) => p.socketId === socket.id);
    if (!player) return;

    if (room.gamePhase === "drawing") {
      const wasCorrect = checkGuess(roomCode, player.id, message);

      if (wasCorrect) {
        return;
      }
    }

    if (!canSendMessage(player.id)) {
      socket.emit("spam-warning", "Slow down bro 😅, Don't Spam!");
      return;
    }

    const msgData = {
      message,
      senderName,
      senderId: player.id,
      time: Date.now(),
    };

    room.messages.push(msgData);

    io.to(roomCode).emit("receive-message", msgData);
  });

  socket.on("draw", (drawData) => {
    const room = rooms.get(drawData.roomCode);
    if (!room) return;

    if (room.gamePhase !== "drawing") return;

    const player = room.players.find((p) => p.socketId === socket.id);
    if (!player || player.id !== room.currentDrawer) return;

    room.drawingData.push(drawData);

    socket.to(drawData.roomCode).emit("draw", drawData);
  });

  socket.on("clear-canvas", ({ roomCode }) => {
    const room = rooms.get(roomCode);
    if (!room) return;

    const player = room.players.find((p) => p.socketId === socket.id);
    if (!player || player.id !== room.currentDrawer) return;

    room.drawingData = [];

    io.to(roomCode).emit("clear-canvas");
  });

  socket.on("fetch-drawing", ({ roomId }) => {
    const room = rooms.get(roomId);
    if (!room) return;

    socket.emit("load-drawing", room.drawingData);
  });

  socket.on("join-voice", ({ roomCode, playerId }) => {
    const room = rooms.get(roomCode);
    if (!room) return;

    const player = room.players.find(
      (p) => p.id === playerId && p.socketId === socket.id,
    );
    if (!player) return;

    addVoiceUser(roomCode, socket.id);

    socket.to(roomCode).emit("voice-user-joined", {
      playerId: playerId,
      socketId: socket.id,
    });

    const voiceUsers = getVoiceUsers(roomCode);
    const voicePlayers = room.players
      .filter((p) => voiceUsers.has(p.socketId) && p.socketId !== socket.id)
      .map((p) => ({ playerId: p.id, socketId: p.socketId }));

    socket.emit("voice-users-list", { users: voicePlayers });

    console.log(`${player.name} joined voice chat in room ${roomCode}`);
  });

  socket.on("leave-voice", ({ roomCode, playerId }) => {
    const room = rooms.get(roomCode);
    if (!room) return;

    const player = room.players.find((p) => p.id === playerId);
    if (!player) return;

    removeVoiceUser(roomCode, socket.id);

    io.to(roomCode).emit("voice-user-left", {
      playerId: playerId,
      socketId: socket.id,
    });

    console.log(`${player.name} left voice chat in room ${roomCode}`);
  });

  socket.on("webrtc-offer", ({ targetSocketId, offer, senderId }) => {
    io.to(targetSocketId).emit("webrtc-offer", {
      offer: offer,
      senderSocketId: socket.id,
      senderId: senderId,
    });
  });

  socket.on("webrtc-answer", ({ targetSocketId, answer, senderId }) => {
    io.to(targetSocketId).emit("webrtc-answer", {
      answer: answer,
      senderSocketId: socket.id,
      senderId: senderId,
    });
  });

  socket.on(
    "webrtc-ice-candidate",
    ({ targetSocketId, candidate, senderId }) => {
      io.to(targetSocketId).emit("webrtc-ice-candidate", {
        candidate: candidate,
        senderSocketId: socket.id,
        senderId: senderId,
      });
    },
  );

  socket.on("disconnect", () => {
    console.log("User disconnected: ", socket.id);

    for (const [roomCode, users] of voiceChatUsers.entries()) {
      if (users.has(socket.id)) {
        removeVoiceUser(roomCode, socket.id);
      }
    }

    for (const [code, room] of rooms.entries()) {
      const playerIndex = room.players.findIndex(
        (p) => p.socketId === socket.id,
      );

      if (playerIndex !== -1) {
        const player = room.players[playerIndex];

        room.players[playerIndex].status = "offline";
        cleanupMessageHistory(player.id);

        console.log(`${player.name} went offline in room ${code}`);

        io.to(code).emit("player-status-changed", {
          playerId: player.id,
          status: "offline",
          players: room.players,
        });

        const allOffline = room.players.every((p) => p.status === "offline");

        if (allOffline) {
          console.log(
            `All players offline in room ${code}. Scheduling cleanup in 1 minutes...`,
          );

          const cleanupTimer = setTimeout(
            () => {
              const currentRoom = rooms.get(code);
              if (
                currentRoom &&
                currentRoom.players.every((p) => p.status === "offline")
              ) {
                clearRoomTimers(code);
                rooms.delete(code);
                console.log(`Room ${code} deleted after inactivity`);
              }
            },
            1 * 60 * 1000,
          );

          if (!roomTimers.has(code)) roomTimers.set(code, {});
          roomTimers.get(code).cleanup = cleanupTimer;
        }

        break;
      }
    }
  });
});

app.get("/", async (req, res) => {
  res.json({
    status: "Server is healthy",
    success: true,
  });
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
