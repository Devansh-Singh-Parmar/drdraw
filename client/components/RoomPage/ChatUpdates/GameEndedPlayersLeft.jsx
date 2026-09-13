import { capitalizeFirst } from "@/utils/utils";
import React from "react";

const GameEndedPlayersLeft = ({ message }) => {
  return (
    <div className="border-2 flex gap-2 items-center text-game-text text-sm rounded-md px-3 py-2 border-game-green bg-green-50 font-semibold">
      <span>🏆</span>
      <p>
        <span className="font-bold text-game-green-dark">
          {capitalizeFirst(message)}
        </span>
        {""}wins - everyone else left!
      </p>
    </div>
  );
};

export default GameEndedPlayersLeft;
