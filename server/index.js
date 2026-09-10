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
    currentDrawers: null,
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
  const room = room.get(roomCode);
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
    const currentRoom = room.get(roomCode);
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

    currentRoom.currentDrawerIndex = -1;
    currentRoom.currentDrawer = null;
    currentRoom.currentWord = null;
    currentRoom.wordOptions = [];
    currentRoom.gamePhase = "lobby";
    currentRoom.round = 0;
    currentRoom.drawingData = [];
    currentRoom.correctGuessers = [];
    currentRoom.turnStartTime = null;

    if (onlinePLayers.length === 0) {
      console.log(`Room ${roomCode} is empty. Deleting room.`);
      clearRoomTimers(roomCode);
      rooms.delete(roomCode);
      return;
    }
    const hostExists = onlinePlayers.find((p) => p.id === currentRoom.host);
    if (!hostExists && onlinePlayers.length > 0) {
      currentRoom.host = onlinePlayers[0].id;
      console.log(
        `Room ${roomCode}:New Host assigned to ${onlinePlayers[0].name}`,
      );
    }

    io.to(roomCode).emit("game-reset", {
      players: currentRoom.players,
      hostId: currentRoom.host,
      settings: currentRoom.settings,
      message: "Game ended! Ready to play again?",
    });
    console.log(
      `Room ${roomCode}:Game reset ${onlinePlayers.length} players remaining.`,
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

  if (room.currentGuessers.length === 0) {
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
