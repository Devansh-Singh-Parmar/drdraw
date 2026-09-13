import { capitalizeFirst } from "@/utils/utils";
import React from "react";

const PlayerJoined = ({ message }) => {
  return (
    <div className="border-2 flex gap-2 items-center text-game-text text-sm rounded-md px-3 py-2 border-game-blue bg-blue-50 font-semibold">
      <span>👋🏼</span>
      <p>
        <span className="font-bold text-game-blue-dark">
          {capitalizeFirst(message)}
        </span>
        {""}joined the game!
      </p>
    </div>
  );
};

export default PlayerJoined;
