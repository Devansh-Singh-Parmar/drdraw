import React from "react";

const Updates = ({ message }) => {
  return (
    <div className="border-2 flex gap-2 items-center text-game-muted text-sm rounded-md px-3 py-2 border-game-border bg-gray-50 font-semibold italic">
      {message}
    </div>
  );
};

export default Updates;
