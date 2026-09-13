"use client";
import React, { useState, useEffect } from "react";
import { X, Lightbulb } from "lucide-react";

import { createPortal } from "react-dom";

const HintDialog = ({ hint, timeLeft }) => {
  const canShowHint = timeLeft <= 20 && timeLeft > 0;
  if (!canShowHint) {
    return null;
  }
  const [showHint, setShowHint] = useState(false);
  const [animateHint, setAnimateHint] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const openHint = () => {
    setShowHint(true);
    requestAnimationFrame(() => setAnimateHint(true));
  };
  const closeHint = () => {
    setAnimateHint(false);
    setTimeout(() => setShowHint(false), 300);
  };
  const HintModal = () => (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 transition-opacity duration-300 ${animateHint ? "opacity-100" : "opacity-0"}`}
      onClick={closeHint}
    >
      <div
        className={`game-panel w-full max-w-sm transform transition-all duration-300 ease-out
                    ${
                      animateHint
                        ? "scale-100 translate-y-0 opacity-100"
                        : "scale-90 translate-y-6 opacity-0"
                    }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="font-bold text-game-text flex items-center justify-between">
          <h2 className="font-bold text-game-text flex items-center gap-2">
            <Lightbulb className="w-5 h-5 text-game-orange" />
            need a hint?
          </h2>
          <button
            onClick={closeHint}
            className="p-1 hover:bg-gray-100 rounded cursor-pointer"
            aria-label="Close hint"
          >
            <X className="w-5 h-5 text-game-muted" />
          </button>
        </div>
        <div className="p-4">
          {hint ? (
            <p className="text-game-text text-sm font-semibold leading-relaxed">
              {hint}
            </p>
          ) : (
            <div className="flex items-center justify-center py-6">
              <div className="animate-pulse text-game-muted font-semibold">
                thinking...
              </div>
            </div>
          )}
        </div>
        <div className="p-3 border-t-2 border-game-border">
          <button onClick={closeHint} className="game-btn w-full py-2 text-sm">
            ok!
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <button
        onClick={openHint}
        className="bg-game-orange text-white text-xs font-bold px-2 py-1 rounded border-2 border-[#c88a20] flex items-center gap-1 cursor-pointer hover:brightness-105"
        aria-label="Open hint dialog"
      >
        <Lightbulb className="w-3.5 h-3.5" />
        hint
      </button>

      {mounted && showHint && createPortal(<HintModal />, document.body)}
    </div>
  );
};

export default HintDialog;
