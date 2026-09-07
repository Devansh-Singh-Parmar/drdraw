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
  }
};
