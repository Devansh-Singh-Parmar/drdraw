"use client";
import React, { useState, useEffect } from "react";
import { x, Lightbulb } from "lucide-react";

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
      ></div>
    </div>
  );
};
