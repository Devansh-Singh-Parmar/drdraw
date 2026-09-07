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
