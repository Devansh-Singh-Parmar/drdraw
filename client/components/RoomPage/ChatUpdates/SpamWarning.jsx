import React from "react";

const SpamWarning = ({ message }) => {
  return (
    <div className="border-2 flex gap-2 items-center text-red-700 text-sm rounded-md px-3 py-2 border-red-400 bg-red-50 font-bold">
      ⚠️ {message}
    </div>
  );
};

export default SpamWarning;
