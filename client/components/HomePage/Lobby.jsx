"use client";

import { useEffect, useState } from "react";
import { initSocket } from "@/socket/socket";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import Header from "./Header";

export default function DrDraw() {
  const searchParams = useSearchParams();
  const rId = searchParams.get("rid");
  const [name, setName] = useState("");
  const [roomId, setRoomId] = useState(rId || "");
  const [mode, setMode] = useState("");
  const [showJoin, setShowJoin] = useState(!!rId);
  const [errors, setErrors] = useState({ name: "", roomId: "" });
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const socket = initSocket();
    socket.on("connect", () => {});

    socket.on("room-created", ({ code, player }) => {
      sessionStorage.setItem("player", JSON.stringify(player));
      sessionStorage.setItem("roomId", code);
      router.push(`/room/${code}`);
    });
    socket.on("room-joined", ({ room, player }) => {
      sessionStorage.setItem("player", JSON.stringify(player));
      sessionStorage.setItem("roomId", code);
      router.push(`/room/${room.code}`);
    });
    socket.on("error", ({ message }) => {
      setLoading(false);
      alert(message);
    });
    return () => {
      socket.off("room-created");
      socket.off("room-joined");
      socket.off("error");
      socket.off("connect");
    };
  }, []);

  const handleCreateRoom = (e) => {
    e.preventDefault();
    setErrors({ name: "", roomId: "" });
    if (!name.trim()) {
      setErrors({ name: "pick a name first!", roomId: "" });
      return;
    }
    if (name.length > 20) {
      setErrors({ name: "name must be under 20 chars", roomId: "" });
      return;
    }
    setLoading(true);
    const socket = initSocket();
    socket.emit("create-room", { playerName: name.trim() });
  };
  const handleJoinRoom = (e) => {
    e.preventDefault();
    const newErrors = { name: "", roomId: "" };
    if (!name.trim()) {
      newErrors.name = "pick a name first!";
    }
    if (!roomId.trim()) {
      newErrors.roomId = "enter a room code";
    }
    if (name.length > 20) {
      setErrors({ name: "name must be under 20 chars", roomId: "" });
      return;
    }
    if (newErrors.name || newErrors.roomId) {
      setErrors(newErrors);
      return;
    }
    setLoading(true);
    const socket = initSocket();
    socket.emit("join-room", {
      code: roomId.toUpperCase().trim(),
      playerName: name.trim(),
    });
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (name.trim() && roomId.trim()) {
        handleJoinRoom(e);
      } else if (name.trim() && !roomId.trim()) {
        handleCreateRoom(e);
      }
    }
  };
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 gap-6">
      <div className="w-full max-w-sm">
        <Header />
      </div>

      <div className="game-panel p-6 w-full max-w-sm">
        <div className="space-y-3">
          <div>
            <input
              type="text"
              placeholder="your name"
              value={name}
              onKeyPress={handleKeyPress}
              onChange={(e) => {
                setName(e.target.value);
                if (errors.name) setErrors({ ...errors, name: "" });
              }}
              className={`game-input text-base ${errors.name ? "border-red-400" : ""}`}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>
          {showJoin && (
            <div>
              <input
                type="text"
                placeholder="room code"
                value={roomId}
                onKeyPress={handleKeyPress}
                onChange={(e) => {
                  setRoomId(e.target.value);
                  if (errors.roomId) setErrors({ ...errors, roomId: "" });
                }}
                className={`game-input text-base uppercase ${errors.roomId ? "border-red-400" : ""}`}
              />
              {errors.roomId && (
                <p className="text-red-500 text-sm mt-1">{errors.roomId}</p>
              )}
            </div>
          )}
          {!showJoin ? (
            <button
              disabled={loading}
              onClick={(e) => {
                setMode("create");
                handleCreateRoom(e);
              }}
              className="game-btn w-full py-3 text-lg mt-1"
            >
              {loading ? "..." : "Play!"}
            </button>
          ) : (
            <button
              disabled={loading}
              onClick={(e) => {
                setMode("join");
                handleJoinRoom(e);
              }}
              className="game-btn w-full py-3 text-lg mt-1"
            >
              {loading ? "..." : "Join!"}
            </button>
          )}
          <button
            type="button"
            onClick={() => {
              setShowJoin(!showJoin);
              setErrors({ name: "", roomId: "" });
            }}
            className="w-full text-center text-game-blue-dark text-sm font-bold hover:underline cursor-pointer py-1"
          >
            {showJoin
              ? "create a new room instead"
              : "got a room code? join here!"}
          </button>
        </div>
      </div>
      <div className="w-full max-w-md text-center text-white/75 text-sm space-y-2 px-4">
        <p>draw the word, others can guess it - most points win!</p>
        <p className="hidden sm:block text-white/60 text-xs">
          free · no signup · just pick a name and go
        </p>
      </div>
    </div>
  );
}
