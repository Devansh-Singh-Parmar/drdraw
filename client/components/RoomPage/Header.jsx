"use client";
import { Copy, Link } from "lucide-react";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const Header = ({ roomId }) => {
  const [origin, setOrigin] = useState("");

  useEffect(() => {
    setOrigin(window.location.origin);
  }, []);

  const url = origin + `?rid=${roomId}`;

  return (
    <div className="game-panel px-4 py-3">
      <h1 className="logo-text text-3xl sm:text-4xl font-bold lowercase text-center text-game-blue-dark">
        drdraw
      </h1>
      <div className="text-center text-game-muted text-xs mt-1 font-bold flex justify-center items-center gap-x-2">
        <span>room: {roomId}</span>
        <button
          className="cursor-pointer text-game-blue-dark hover:text-game-blue"
          onClick={() => {
            navigator.clipboard.writeText(roomId);
            toast.success("copied!");
          }}
        >
          <Copy className="size-3.5" />
        </button>
        <button
          onClick={() => {
            navigator.clipboard.writeText(url);
            toast.success("invite link copied!");
          }}
          className="flex gap-1 justify-center items-center text-game-green-dark underline cursor-pointer"
        >
          <Link className="size-3.5" />
          invite
        </button>
      </div>
    </div>
  );
};

export default Header;
