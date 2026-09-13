import { io } from "socket.io-client";

let socket = null;

const SERVER_URL = "https://drdraw.onrender.com/";
//const SERVER_URL = "http://localhost:5001";
// const SERVER_URL = "http://10.208.39.167:5000"

export const initSocket = () => {
  if (!socket) {
    socket = io(SERVER_URL, {
      transports: ["websocket", "polling"],
      reconnection: true,
      reconnectionAttempts: 5,
      reconnectionDelay: 1000,
    });
  }
  return socket;
};
