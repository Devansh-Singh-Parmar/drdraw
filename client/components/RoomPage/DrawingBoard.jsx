"use client";
import { initSocket } from "../../socket/socket";
import { Pipette } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const TOOLS = {
  PEN: "pen",
  ERASER: "eraser",
};

const CANVAS_WIDTH = 1200;
const CANVAS_HEIGHT = 700;

const DrawingBoard = ({ roomId, canDraw = true }) => {
  const socket = initSocket();
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const ctxRef = useRef(null);
  const [tool, setTool] = useState(TOOLS.PEN);
  const [color, setColor] = useState("#000000");
  const [size, setSize] = useState(5);
  const [isDrawing, setIsDrawing] = useState(false);
  const [start, setStart] = useState({ x: 0, y: 0 });
  const [scale, setScale] = useState(1);
  const colorInputRef = useRef(null);

  const colorPalette = [
    "#000000",
    "#FFFFFF",
    "#FF0000",
    "#00FF00",
    "#0000FF",
    "#FFFF00",
    "#FF00FF",
    "#00FFFF",
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width = CANVAS_WIDTH;
    canvas.height = CANVAS_HEIGHT;

    const ctx = canvas.getContext("2d");
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctxRef.current = ctx;

    updateScale();
    window.addEventListener("resize", updateScale);

    return () => {
      window.removeEventListener("resize", updateScale);
    };
  }, []);

  const updateScale = () => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;

    const scaleX = containerWidth / CANVAS_WIDTH;
    const scaleY = containerHeight / CANVAS_HEIGHT;
    const newScale = Math.min(scaleX, scaleY, 1); // Never scale up, only down

    setScale(newScale);
  };

  useEffect(() => {
    if (!socket) return;

    const handleDraw = (data) => {
      drawStroke(data);
    };

    const handleClear = () => {
      clearCanvas();
    };

    const handleLoadDrawing = (drawHistory) => {
      clearCanvas();
      if (drawHistory && drawHistory.length > 0) {
        drawHistory.forEach((data) => drawStroke(data));
      }
    };

    socket.on("draw", handleDraw);
    socket.on("clear-canvas", handleClear);
    socket.on("load-drawing", handleLoadDrawing);

    socket.emit("fetch-drawing", { roomId });

    return () => {
      socket.off("draw", handleDraw);
      socket.off("clear-canvas", handleClear);
      socket.off("load-drawing", handleLoadDrawing);
    };
  }, [socket, roomId]);

  const drawStroke = (data) => {
    const ctx = ctxRef.current;
    if (!ctx) return;

    if (data.tool === TOOLS.ERASER) {
      ctx.globalCompositeOperation = "destination-out";
      ctx.strokeStyle = "rgba(0,0,0,1)";
    } else {
      ctx.globalCompositeOperation = "source-over";
      ctx.strokeStyle = data.color;
    }

    ctx.lineWidth = data.size;

    ctx.beginPath();
    ctx.moveTo(data.startX, data.startY);
    ctx.lineTo(data.endX, data.endY);
    ctx.stroke();
    ctx.closePath();

    ctx.globalCompositeOperation = "source-over";
  };

  const getCoords = (e) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const event = e.touches ? e.touches[0] : e;

    const x = (event.clientX - rect.left) / scale;
    const y = (event.clientY - rect.top) / scale;

    return { x, y };
  };

  const startDrawing = (e) => {
    const { x, y } = getCoords(e);
    setStart({ x, y });
    setIsDrawing(true);
  };

  const draw = (e) => {
    if (!isDrawing) return;
    if (!canDraw) return;

    const { x, y } = getCoords(e);

    const drawData = {
      tool,
      startX: start.x,
      startY: start.y,
      endX: x,
      endY: y,
      color,
      size,
      roomCode: roomId,
    };

    drawStroke(drawData);
    socket.emit("draw", drawData);

    setStart({ x, y });
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    const ctx = ctxRef.current;
    const canvas = canvasRef.current;
    if (!ctx || !canvas) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  const handleClear = () => {
    clearCanvas();
    socket.emit("clear-canvas", { roomCode: roomId });
  };

  return (
    <div className="flex flex-col h-full">
      <div className="p-2 border-b-2 border-game-border bg-gray-50 shrink-0">
        <div
          className={`flex flex-wrap gap-y-2 gap-x-2 items-center ${canDraw ? "justify-between" : "justify-center"}`}
        >
          {canDraw && (
            <div className="flex gap-1.5 items-start">
              <button
                onClick={() => setTool(TOOLS.PEN)}
                disabled={!canDraw}
                className={`px-2 py-1 md:px-3 md:py-1.5 text-sm rounded font-bold transition ${!canDraw ? "opacity-50 cursor-not-allowed" : "cursor-pointer"} ${
                  tool === TOOLS.PEN
                    ? "bg-game-blue text-white border-2 border-game-blue-dark"
                    : "bg-white text-game-text border-2 border-game-border hover:bg-gray-50"
                }`}
              >
                ✏️ pen
              </button>
              <button
                disabled={!canDraw}
                onClick={() => setTool(TOOLS.ERASER)}
                className={`px-2 py-1 md:px-3 md:py-1.5 text-sm rounded font-bold transition ${!canDraw ? "opacity-50 cursor-not-allowed" : "cursor-pointer"} ${
                  tool === TOOLS.ERASER
                    ? "bg-game-blue text-white border-2 border-game-blue-dark"
                    : "bg-white text-game-text border-2 border-game-border hover:bg-gray-50"
                }`}
              >
                🧹 eraser
              </button>
            </div>
          )}

          {canDraw && (
            <div className="flex gap-2 items-center flex-wrap">
              {colorPalette.map((c) => (
                <button
                  key={c}
                  onClick={() => setColor(c)}
                  className={`h-6 w-6 md:w-7 md:h-7 rounded-full border-2 transition ${
                    color === c
                      ? "border-white scale-110"
                      : "border-gray-500 cursor-pointer"
                  }`}
                  style={{ backgroundColor: c }}
                />
              ))}
              <input
                type="color"
                value={color}
                onChange={(e) => setColor(e.target.value)}
                className="w-6 h-6 rounded-full cursor-pointer"
                ref={colorInputRef}
              />
              <button title="Change color">
                <Pipette
                  className="text-game-muted size-4 cursor-pointer hover:scale-110 transition"
                  onClick={() => colorInputRef.current.click()}
                />
              </button>
            </div>
          )}

          {canDraw && (
            <div className="flex gap-2 items-center text-game-text">
              <span className="text-sm font-bold">size</span>
              <input
                type="range"
                min="1"
                max="30"
                value={size}
                onChange={(e) => setSize(Number(e.target.value))}
                className="w-20 accent-game-blue"
              />
              <span className="text-sm w-8 font-bold">{size}</span>
            </div>
          )}

          {!canDraw && (
            <div className="text-center font-bold text-game-muted text-sm py-1">
              👀 watch and guess!
            </div>
          )}

          {canDraw && (
            <button
              onClick={handleClear}
              disabled={!canDraw}
              className={`px-2 py-1 md:px-3 md:py-1.5 rounded text-sm bg-red-500 text-white border-2 border-red-600 hover:bg-red-600 transition font-bold ${!canDraw ? "opacity-50 cursor-not-allowed" : "cursor-pointer"} `}
            >
              🗑️ clear
            </button>
          )}
        </div>
      </div>

      <div
        ref={containerRef}
        className="flex-1 p-2 flex items-center justify-center bg-[#e8e8e8] min-h-0 overflow-hidden"
        style={{
          backgroundImage: "radial-gradient(#ccc 1px, transparent 1px)",
          backgroundSize: "16px 16px",
        }}
      >
        <canvas
          ref={canvasRef}
          className={`bg-white border-2 border-game-border rounded shadow-sm cursor-crosshair ${canDraw ? "cursor-crosshair" : "cursor-not-allowed"}`}
          style={{
            width: `${CANVAS_WIDTH * scale}px`,
            height: `${CANVAS_HEIGHT * scale}px`,
            maxWidth: "100%",
            maxHeight: "100%",
            touchAction: "none",
          }}
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={stopDrawing}
          onMouseLeave={stopDrawing}
          onTouchStart={startDrawing}
          onTouchMove={draw}
          onTouchEnd={stopDrawing}
        />
      </div>
    </div>
  );
};

export default DrawingBoard;
