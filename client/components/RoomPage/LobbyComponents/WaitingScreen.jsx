import React from "react";

const WaitingScreen = () => {
  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 p-4 flex flex-col items-center justify-center bg-white min-h-0 overflow-hidden">
        <p className="text-4xl mb-3">⏳</p>
        <p className="font-bold text-game-text max-md:text-sm text-center">
          hang tight - host will start the game soon
        </p>
      </div>
    </div>
  );
};
export default WaitingScreen;
