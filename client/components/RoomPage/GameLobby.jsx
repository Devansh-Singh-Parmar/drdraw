"use client";

import { useEffect, useState, useRef } from "react";
import {
  Gamepad2,
  MessageCircle,
  SendHorizontal,
  Trophy,
  Clock,
  Palette,
  Copy,
} from "lucide-react";
import MessageBox from "./MessageBox";
import { initSocket } from "../../socket/socket";
import PlayerCard from "./PlayerCard";
import Header from "./Header";
import DrawingBoard from "./DrawingBoard";
import Link from "next/link";
import { capitalizeFirst, truncateText } from "@/utils/utils";
import toast from "react-hot-toast";
import PlayerJoined from "./ChatUpdates/PlayerJoined";
import PlayerGuessed from "./ChatUpdates/PlayerGuessed";
import { useRouter } from "next/navigation";
import Updates from "./ChatUpdates/Updates";
import GameEndedPlayersLeft from "./ChatUpdates/GameEndedPlayersLeft";
import WaitingScreen from "./LobbyComponents/WaitingScreen";
// import VoiceChat from "./VoiceChat/VoiceChat";
import SettingsScreen from "./LobbyComponents/SettingsScreen";
import HintDialog from "./LobbyComponents/HintDialog";
import VoiceChat from "./VoiceChat/VoiceChat";
import GameSoundEffects from "./GameSoundsEffects/GameSoundEffects";
import SpamWarning from "./ChatUpdates/SpamWarning";

const GameLobby = ({ roomId }) => {
  // Added playerName prop
  const [players, setPlayers] = useState([]);
  const socket = initSocket();
  const [currentPlayer, setCurrentPlayer] = useState(null);
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState("");
  const [hostId, setHostId] = useState();
  const [isReconnecting, setIsReconnecting] = useState(true);
  const [invalidUser, setInvalidUser] = useState(false);
  const router = useRouter();

  // Game state
  const [gameStarted, setGameStarted] = useState(false);
  const [gamePhase, setGamePhase] = useState("lobby");
  const [currentDrawer, setCurrentDrawer] = useState(null);
  const [currentRound, setCurrentRound] = useState(0);
  const [maxRounds, setMaxRounds] = useState(3);
  const [wordOptions, setWordOptions] = useState([]);
  const [selectedWord, setSelectedWord] = useState(null);
  const [wordHint, setWordHint] = useState("");
  const [aiHint, setAiHint] = useState("");
  const [timeLeft, setTimeLeft] = useState(0);
  const [correctGuessers, setCorrectGuessers] = useState([]);
  const [revealedWord, setRevealedWord] = useState("");
  const [leaderboard, setLeaderboard] = useState([]);
  const [showLeaveConfirm, setShowLeaveConfirm] = useState(false);
  const [enableSendMessage, setEnableSendMessage] = useState(true);

  const desktopChatRef = useRef(null);
  const mobileChatRef = useRef(null);
  const timerRef = useRef(null);

  // useEffect render at first, loads all initial state and data  ,, reconnecting logic
  useEffect(() => {
    // Handle reconnection on mount
    const storedPlayer = sessionStorage.getItem("player");
    const storedRoomId = sessionStorage.getItem("roomId");

    if (storedPlayer && storedRoomId === roomId) {
      const player = JSON.parse(storedPlayer);
      setCurrentPlayer(player);

      // Reconnect to room with existing playerId
      socket.emit("reconnect-room", {
        code: roomId,
        playerId: player.id,
      });
    } else {
      // This is a fresh join (shouldn't happen in GameLobby, but handle it)
      setInvalidUser(true);
      setIsReconnecting(false);
    }

    // Listen for reconnection success
    const handleRoomReconnected = ({ room, player }) => {
      setCurrentPlayer(player);
      setPlayers(room.players);
      setCurrentRound(room.round);
      setHostId(room.host);
      setMessages(room.messages || []);
      setGameStarted(room.gameStarted);
      setIsReconnecting(false);

      // Update sessionStorage with latest data
      sessionStorage.setItem("player", JSON.stringify(player));
      sessionStorage.setItem("roomId", roomId);
    };

    socket.on("room-reconnected", handleRoomReconnected);

    // Cleanup
    return () => {
      socket.off("room-reconnected", handleRoomReconnected);
    };
  }, [roomId]);

  // Fetch players and chat on mount
  useEffect(() => {
    if (isReconnecting) return;

    socket.emit("fetch-players", { roomId });
    socket.emit("fetch-chat", { roomId });

    const handleAllPlayers = ({ players, hostId }) => {
      setPlayers(players);
      setHostId(hostId);
    };

    socket.on("all-players", handleAllPlayers);

    return () => {
      socket.off("all-players", handleAllPlayers);
    };
  }, [roomId, isReconnecting]);

  // Chat listeners
  useEffect(() => {
    const handleChatHistory = (msgs) => {
      setMessages(msgs);
    };

    const handleReceiveMessage = (data) => {
      setMessages((prev) => [...prev, data]);
    };

    const handleSpamWarning = (warningMesg) => {
      // add a temporary mesg to messages array
      setEnableSendMessage(false);
      const mesg = {
        message: warningMesg,
        type: "spam-warning",
      };
      setMessages((prev) => [...prev, mesg]);
      setTimeout(() => {
        setEnableSendMessage(true);
      }, 3000);
    };

    socket.on("chat-history", handleChatHistory);
    socket.on("receive-message", handleReceiveMessage);
    socket.on("spam-warning", handleSpamWarning);

    return () => {
      socket.off("chat-history", handleChatHistory);
      socket.off("receive-message", handleReceiveMessage);
      socket.off("spam-warning", handleSpamWarning);
    };
  }, []);

  // Player joined/left/status changed listeners
  useEffect(() => {
    const handlePlayerJoined = ({ players, player }) => {
      // add a temporary mesg to messages array, that player it joined and show it in a custom way
      const mesg = {
        message: `${player.name}`,
        type: "player-joined",
      };
      setMessages((prev) => [...prev, mesg]);
      setPlayers(players);
    };

    const handlePlayerStatusChanged = ({ players, playerId, status }) => {
      setPlayers(players);
      // If the current drawer went offline during drawing, show notification
      if (
        playerId === currentDrawer &&
        status === "offline" &&
        gamePhase === "drawing"
      ) {
        const notification = {
          type: "updates",
          message: "Drawer disconnected. Moving to next turn...",
        };
        setMessages((prev) => [...prev, notification]);
      }
    };

    socket.on("player-joined", handlePlayerJoined);
    socket.on("player-status-changed", handlePlayerStatusChanged);

    return () => {
      socket.off("player-joined", handlePlayerJoined);
      socket.off("player-status-changed", handlePlayerStatusChanged);
    };
  }, []);

  // Game event listeners
  useEffect(() => {
    // Game started
    const handleGameStarted = ({ maxRounds }) => {
      setGameStarted(true);
      setMaxRounds(maxRounds);
      setGamePhase("starting");
    };

    // Turn start
    const handleTurnStart = ({ drawerId, drawerName, round, maxRounds }) => {
      setCurrentDrawer(drawerId);
      setCurrentRound(round);
      setMaxRounds(maxRounds);
      setGamePhase("turn-start");
      setCorrectGuessers([]);
      setRevealedWord("");
      setWordHint("");
      setSelectedWord(null);
      setAiHint("");
    };

    // Word options (only for drawer)
    const handleWordOptions = ({ words, timeLimit }) => {
      setWordOptions(words);
      setGamePhase("word-selection");
      setTimeLeft(Math.floor(timeLimit / 1000));
    };

    // Drawing phase start
    const handleDrawingPhaseStart = ({ wordHint, timeLimit, aiHint }) => {
      setGamePhase("drawing");
      setWordHint(wordHint);
      setAiHint(aiHint);
      setTimeLeft(Math.floor(timeLimit / 1000));
      setWordOptions([]);
    };

    // Your word (only for drawer)
    const handleYourWord = ({ word }) => {
      setSelectedWord(word);
    };

    // Correct guess
    const handleCorrectGuess = ({ playerId, playerName, players }) => {
      setPlayers(players);
      // add a temporary mesg to messages array, that this player guess is correct
      const mesg = {
        message: `${playerName}`,
        type: "player-guessed",
      };
      setMessages((prev) => [...prev, mesg]);
      setCorrectGuessers((prev) => [...prev, { playerId, playerName }]);
    };

    // Turn end
    const handleTurnEnd = ({ word, players }) => {
      setRevealedWord(word);
      setPlayers(players);
      setGamePhase("turn-end");
      setTimeLeft(0);
    };

    // Round end
    const handleRoundEnd = ({ round, players }) => {
      setPlayers(players);
      setGamePhase("round-end");
      // add round ended message to chat, new round will start soon
      // Show notification in chat
      const notification = {
        type: "updates",
        message: `Round ${round} completed! Next Round will start soon.`,
      };
      setMessages((prev) => [...prev, notification]);
      setCurrentRound(round);
    };

    // Game end
    const handleGameEnd = ({ leaderboard, winner }) => {
      setLeaderboard(leaderboard);
      setGamePhase("game-end");
      setGameStarted(false);
    };

    // Game reset (after leaderboard)
    const handleGameReset = ({ players, hostId, message }) => {
      setPlayers(players);
      setHostId(hostId);
      setGamePhase("lobby");
      setGameStarted(false);
      setCurrentDrawer(null);
      setCurrentRound(0);
      setLeaderboard([]);
      setCorrectGuessers([]);
      setWordHint("");
      setSelectedWord(null);
      setRevealedWord("");

      // Show notification to players
      toast(message, {
        icon: "👏",
      });
    };

    // handle player left
    const handlePlayerLeft = ({ playerName, players, hostId, wasDrawing }) => {
      // Update player list
      setPlayers(players);
      setHostId(hostId);

      // Show notification in chat
      const notification = {
        type: "updates",
        message: `${capitalizeFirst(playerName)} left the room`,
      };
      setMessages((prev) => [...prev, notification]);

      // Extra notification if drawer left
      if (wasDrawing) {
        const drawerLeftNotification = {
          type: "updates",
          message: `${capitalizeFirst(playerName)} left the room. Moving to next turn...`,
        };
        setMessages((prev) => [...prev, drawerLeftNotification]);
      }
    };

    const handleLeftRoom = ({ redirect }) => {
      if (redirect) {
        // Clear session storage
        sessionStorage.removeItem("player");
        sessionStorage.removeItem("roomId");

        toast.success("You have left the room. Redirecting to home...");

        // Small delay to ensure socket disconnect is processed
        setTimeout(() => {
          router.push("/");
        }, 100);
      }
    };

    const handleGameEndedInsufficientPlayers = ({
      message,
      players,
      hostId,
    }) => {
      // Update state
      setPlayers(players);
      setHostId(hostId);
      setGameStarted(false);
      setGamePhase("lobby");
      setCurrentDrawer(null);
      setCurrentRound(0);
      setCorrectGuessers([]);
      setWordHint("");
      setSelectedWord(null);
      setRevealedWord("");
      setLeaderboard([]);

      const GameEndedNotSufficientPLayersMessage = {
        type: "game-ended",
        message: `${players[0]?.name}`,
      };
      setMessages((prev) => [...prev, GameEndedNotSufficientPLayersMessage]);

      // Show alert
      setTimeout(() => {
        toast.error(message);
      }, 300);
    };

    // Game state sync (for reconnection)
    const handleGameStateSync = ({
      gamePhase,
      currentDrawer,
      round,
      maxRounds,
      wordHint,
      players,
    }) => {
      setGamePhase(gamePhase);
      setCurrentDrawer(currentDrawer);
      setCurrentRound(round);
      setMaxRounds(maxRounds);
      setWordHint(wordHint || "");
      setPlayers(players);
    };

    socket.on("game-started", handleGameStarted);
    socket.on("turn-start", handleTurnStart);
    socket.on("word-options", handleWordOptions);
    socket.on("drawing-phase-start", handleDrawingPhaseStart);
    socket.on("your-word", handleYourWord);
    socket.on("correct-guess", handleCorrectGuess);
    socket.on("turn-end", handleTurnEnd);
    socket.on("round-end", handleRoundEnd);
    socket.on("game-end", handleGameEnd);
    socket.on("game-reset", handleGameReset);

    // Leave room events (NEW!)
    socket.on("player-left", handlePlayerLeft);
    socket.on("left-room", handleLeftRoom);
    socket.on(
      "game-ended-insufficient-players",
      handleGameEndedInsufficientPlayers,
    );

    socket.on("game-state-sync", handleGameStateSync);

    return () => {
      socket.off("game-started", handleGameStarted);
      socket.off("turn-start", handleTurnStart);
      socket.off("word-options", handleWordOptions);
      socket.off("drawing-phase-start", handleDrawingPhaseStart);
      socket.off("your-word", handleYourWord);
      socket.off("correct-guess", handleCorrectGuess);
      socket.off("turn-end", handleTurnEnd);
      socket.off("round-end", handleRoundEnd);
      socket.off("game-end", handleGameEnd);
      socket.off("game-reset", handleGameReset);
      socket.off("player-left", handlePlayerLeft);
      socket.off("left-room", handleLeftRoom);
      socket.off(
        "game-ended-insufficient-players",
        handleGameEndedInsufficientPlayers,
      );
      socket.off("game-state-sync", handleGameStateSync);
    };
  }, []);

  // Timer countdown
  useEffect(() => {
    if (timeLeft > 0) {
      timerRef.current = setInterval(() => {
        setTimeLeft((prev) => Math.max(0, prev - 1));
      }, 1000);
    } else {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [timeLeft]);

  // Auto-scroll chat to bottom
  useEffect(() => {
    const isDesktop = window.innerWidth >= 1024;
    const activeRef = isDesktop ? desktopChatRef : mobileChatRef;

    if (activeRef.current) {
      activeRef.current.scrollTop = activeRef.current.scrollHeight;
    }
  }, [messages]);

  // Handle error
  useEffect(() => {
    const handleError = ({ message }) => {
      console.error("Socket error:", message);
      alert(message);
    };

    socket.on("error", handleError);

    return () => {
      socket.off("error", handleError);
    };
  }, []);

  // Send message
  const handleSendMessage = () => {
    if (!messageInput.trim()) return;

    // Create message object
    const msgData = {
      roomCode: roomId,
      message: messageInput.trim(),
      senderName: currentPlayer?.name || "Guest",
      timeStamp: timeLeft,
    };

    // Send to server
    socket.emit("send-message", msgData); // Send to server
    setMessageInput("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  // Start game
  const handleStartGame = () => {
    setGameStarted(true);
    socket.emit("start-game", { roomCode: roomId });
  };

  // Select word
  const handleSelectWord = (word) => {
    socket.emit("select-word", { roomCode: roomId, word });
  };

  // Leave room
  const handleLeaveRoom = () => {
    setShowLeaveConfirm(true);
  };

  const confirmLeaveRoom = () => {
    socket.emit("leave-room", { roomCode: roomId });
    setShowLeaveConfirm(false);
  };

  const cancelLeaveRoom = () => {
    setShowLeaveConfirm(false);
  };

  // Get current drawer name
  const getCurrentDrawerName = () => {
    const drawer = players.find((p) => p.id === currentDrawer);
    return drawer ? drawer.name : "";
  };

  // Check if current player is drawer
  const isCurrentPlayerDrawer = currentPlayer?.id === currentDrawer;

  // Show loading state while reconnecting
  if (isReconnecting) {
    return (
      <div className="h-screen flex items-center justify-center bg-game-blue">
        <div className="text-white text-xl font-bold">connecting...</div>
      </div>
    );
  }

  // show invalid screen, if someone tries to sneak-in the room without joining the room
  if (invalidUser) {
    return (
      <div className="h-screen flex flex-col items-center justify-center bg-game-blue text-white gap-4">
        <p className="text-xl font-bold">oops! join from the home page first</p>
        <Link href={"/"} className="game-btn px-6 py-2 text-base no-underline">
          go home
        </Link>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-game-blue">
      {/* Add Sound Effects Component */}
      <GameSoundEffects
        gamePhase={gamePhase}
        timeLeft={timeLeft}
        currentRound={currentRound}
        gameStarted={gameStarted}
      />

      {/* Leave Room Confirmation Modal */}
      {showLeaveConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="game-panel p-6 max-w-md w-full mx-4">
            <h2 className="text-game-text text-xl font-bold mb-3">
              leave room?
            </h2>
            <p className="text-game-muted mb-6 font-semibold">
              sure? {gameStarted && "game's still going."}
            </p>
            <div className="flex gap-3">
              <button
                onClick={confirmLeaveRoom}
                className="flex-1 bg-red-500 hover:bg-red-600 border-2 border-red-600 cursor-pointer text-white font-bold py-2.5 rounded-md transition-all"
              >
                yeah, leave
              </button>
              <button
                onClick={cancelLeaveRoom}
                className="flex-1 bg-white hover:bg-gray-50 border-2 border-game-border cursor-pointer text-game-text font-bold py-2.5 rounded-md transition-all"
              >
                nvm
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Word Selection Popup */}
      {gamePhase === "word-selection" && isCurrentPlayerDrawer && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="game-panel p-6 max-w-md w-full mx-4">
            <h2 className="text-game-text text-2xl font-bold text-center mb-3">
              pick a word!
            </h2>
            <div className="text-center text-game-muted mb-5 flex items-center justify-center gap-2">
              <Clock className="w-5 h-5 text-game-orange" />
              <span className="text-xl font-bold text-game-orange">
                {timeLeft}s
              </span>
            </div>
            <div className="space-y-2">
              {wordOptions.map((word, index) => (
                <button
                  key={index}
                  onClick={() => handleSelectWord(word)}
                  className="game-btn w-full py-3 px-6 text-lg"
                >
                  {capitalizeFirst(word)}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Turn End Popup */}
      {gamePhase === "turn-end" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="game-panel p-6 max-w-md w-full mx-4">
            <h2 className="text-game-text text-2xl font-bold text-center mb-4">
              the word was:{" "}
              <span className="text-game-green-dark">
                {capitalizeFirst(revealedWord)}
              </span>
            </h2>
            {correctGuessers.length > 0 ? (
              <div>
                <p className="text-game-muted text-center mb-3 font-semibold">
                  who got it:
                </p>
                <ul className="space-y-2">
                  {correctGuessers.map((guesser, index) => (
                    <li
                      key={index}
                      className="text-game-text text-center bg-green-50 border-2 border-game-green py-2 rounded-md font-bold"
                    >
                      🎉 {capitalizeFirst(guesser.playerName)}
                      <span className="text-sm font-semibold text-game-muted">
                        {guesser.playerId === currentPlayer?.id && " (you!)"}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <p className="text-game-muted text-center font-semibold">
                nobody guessed it 😅
              </p>
            )}
          </div>
        </div>
      )}

      {/* Game End Popup */}
      {gamePhase === "game-end" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="game-panel p-6 max-w-lg w-full mx-4">
            <div className="text-center mb-5">
              <Trophy className="w-14 h-14 text-game-orange mx-auto mb-3" />
              <h2 className="text-game-text text-2xl font-bold">game over!</h2>
            </div>
            <div className="space-y-2 mb-5">
              {leaderboard.slice(0, 3).map((player, index) => (
                <div
                  key={player.id}
                  className={`flex items-center justify-between p-3 rounded-md border-2 font-bold
                                        ${
                                          index === 0
                                            ? "bg-yellow-50 border-yellow-400 text-yellow-900"
                                            : index === 1
                                              ? "bg-gray-50 border-gray-300 text-gray-700"
                                              : index === 2
                                                ? "bg-orange-50 border-orange-300 text-orange-900"
                                                : "bg-white border-game-border text-game-text"
                                        }
                                        `}
                >
                  <span className="flex items-center gap-2">
                    <span className="text-xl">
                      {index === 0
                        ? "🥇"
                        : index === 1
                          ? "🥈"
                          : index === 2
                            ? "🥉"
                            : `${index + 1}.`}
                    </span>
                    {capitalizeFirst(player.name)}
                    <span className="text-sm font-semibold opacity-70">
                      {player.id === currentPlayer?.id && "(you)"}
                    </span>
                  </span>
                  <span>{player.score} pts</span>
                </div>
              ))}
            </div>
            <button className="game-btn w-full py-2.5 text-base">
              back to lobby...
            </button>
          </div>
        </div>
      )}

      {/* Desktop Layout */}
      <div className="relative hidden lg:flex flex-col h-full p-4 gap-4">
        {!gameStarted && <Header roomId={roomId} />}

        {/* Game Info Bar */}
        {gameStarted && gamePhase !== "game-end" && (
          <div className="game-panel p-3 flex items-center justify-between">
            {/* round and current drawer name */}
            <div className="flex items-center gap-4 text-game-text flex-[25%]">
              <div className="flex items-center gap-2">
                <Palette className="w-4 h-4 text-game-blue" />
                <p className="font-bold text-sm">
                  drawing:{" "}
                  <span className="text-game-blue-dark">
                    {truncateText(capitalizeFirst(getCurrentDrawerName()), 12)}
                  </span>
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Trophy className="w-4 h-4 text-game-orange" />
                <p className="font-bold text-sm">
                  round{" "}
                  <span className="text-game-blue-dark">
                    {Math.max(1, currentRound)}/{maxRounds}
                  </span>
                </p>
              </div>
            </div>

            {/* logo and copy button */}
            <div className="flex-[50%]">
              <h1 className="logo-text text-2xl font-bold text-center lowercase text-game-blue-dark">
                drawrush
              </h1>
              <div className="text-center text-game-muted text-xs mt-0.5 font-bold flex justify-center items-center gap-x-2">
                <span>room: {roomId}</span>
                <button
                  className="cursor-pointer hover:text-game-blue"
                  onClick={() => {
                    navigator.clipboard.writeText(roomId);
                    toast.success("copied!");
                  }}
                >
                  <Copy className="size-3" />
                </button>
              </div>
            </div>

            {/* timer and word */}
            <div className="flex-[25%] flex justify-between gap-4 shrink-0 items-center">
              {gamePhase === "drawing" && (
                <div className="flex items-center gap-2 flex-1">
                  {isCurrentPlayerDrawer ? (
                    <p className="font-bold text-game-text text-sm">
                      draw:{" "}
                      <span className="text-game-green-dark underline tracking-wider">
                        {capitalizeFirst(selectedWord)}
                      </span>
                    </p>
                  ) : (
                    <div className="flex flex-col gap-1">
                      <p className="font-bold text-game-text text-sm">
                        guess ({wordHint?.replace(/\s+/g, "")?.length}
                        ):{" "}
                        <span className="text-game-blue-dark tracking-widest">
                          {wordHint}
                        </span>
                      </p>
                      <HintDialog hint={aiHint} timeLeft={timeLeft} />
                    </div>
                  )}
                </div>
              )}
              <div className="flex items-center gap-1.5 bg-gray-100 border-2 border-game-border px-3 py-1.5 rounded-md">
                <Clock className="w-4 h-4 text-game-orange" />
                {timeLeft > 0 ? (
                  <span className="text-game-orange font-bold text-lg">
                    {timeLeft}
                  </span>
                ) : (
                  <span className="text-game-orange font-bold text-sm">
                    wait
                  </span>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Game Screen */}
        <div className="flex gap-4 flex-1 min-h-0">
          {/* PLAYERS PANEL */}
          <div className="game-panel flex flex-col w-64 overflow-hidden">
            <div className="flex text-game-text items-center justify-between gap-2 border-b-2 border-game-border p-3 bg-gray-50">
              <div className="flex justify-center items-center gap-2">
                <Gamepad2 className="w-4 h-4 text-game-blue" />
                <span className="font-bold">players</span>
                <span className="bg-game-blue text-white text-xs px-2 py-0.5 rounded-full font-bold">
                  {players.length}
                </span>
              </div>
              <div>
                <button
                  onClick={handleLeaveRoom}
                  className="px-2 py-1 rounded text-xs bg-red-500 border-2 border-red-600 text-white hover:bg-red-600 transition font-bold cursor-pointer"
                >
                  leave
                </button>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-2 space-y-1.5 bg-white">
              {players.map((player) => (
                <PlayerCard
                  key={player.id}
                  player={player}
                  hostId={hostId}
                  isCurrentUser={currentPlayer?.id === player.id}
                  isDrawing={player.id === currentDrawer}
                  showScore={gameStarted}
                />
              ))}
            </div>

            {!gameStarted && (
              <div className="p-2 border-t-2 border-game-border bg-gray-50">
                <button
                  onClick={handleStartGame}
                  className="game-btn w-full py-2.5 text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={currentPlayer?.id !== hostId || players.length < 2}
                >
                  {currentPlayer?.id === hostId
                    ? "start!"
                    : "waiting for host..."}
                </button>
              </div>
            )}
          </div>

          {/* CANVAS */}
          <div className="game-panel flex-1 overflow-hidden">
            {!gameStarted && currentPlayer?.id !== hostId && <WaitingScreen />}

            {!gameStarted && currentPlayer?.id === hostId && (
              <SettingsScreen
                roomCode={roomId}
                playerId={currentPlayer?.id}
                hostId={hostId}
              />
            )}
            {gameStarted && (
              <DrawingBoard
                roomId={roomId}
                canDraw={isCurrentPlayerDrawer && gamePhase === "drawing"}
              />
            )}
          </div>

          {/* CHAT PANEL */}
          <div className="game-panel flex flex-col w-72 overflow-hidden">
            <div className="flex text-game-text items-center gap-2 border-b-2 border-game-border p-3 bg-gray-50 shrink-0">
              <MessageCircle className="w-4 h-4 text-game-blue" />
              <span className="font-bold">chat</span>

              <div className="flex w-full justify-end">
                <VoiceChat
                  isCurrentPlayerDrawer={isCurrentPlayerDrawer}
                  roomCode={roomId}
                  playerId={currentPlayer?.id}
                />
              </div>
            </div>

            <div
              ref={desktopChatRef}
              className="flex-1 overflow-y-auto p-2 space-y-2 min-h-0 bg-white"
            >
              {messages.map((msg, index) => {
                if (msg?.type == "player-joined") {
                  return <PlayerJoined key={index} message={msg?.message} />;
                } else if (msg?.type == "player-guessed") {
                  return <PlayerGuessed key={index} message={msg?.message} />;
                } else if (msg?.type == "updates") {
                  return <Updates key={index} message={msg?.message} />;
                } else if (msg?.type == "game-ended") {
                  return (
                    <GameEndedPlayersLeft key={index} message={msg?.message} />
                  );
                } else if (msg?.type == "spam-warning") {
                  return <SpamWarning key={index} message={msg?.message} />;
                } else {
                  return (
                    <MessageBox
                      key={`${msg.time}-${index}`}
                      SenderName={msg.senderName}
                      message={msg.message}
                      isOwnMessage={msg.senderId === currentPlayer?.id}
                    />
                  );
                }
              })}
            </div>

            {/* message input  */}
            <div className="p-2 border-t-2 border-game-border bg-gray-50 shrink-0">
              {/* if current player is drawer , dont show player the message input */}
              {!isCurrentPlayerDrawer ? (
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={messageInput}
                    disabled={enableSendMessage === false}
                    onChange={(e) => setMessageInput(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className="game-input flex-1 text-sm py-1.5"
                    placeholder={
                      gamePhase === "drawing" && !isCurrentPlayerDrawer
                        ? "type your guess..."
                        : "say something..."
                    }
                  />
                  <button
                    onClick={handleSendMessage}
                    className="game-btn-secondary game-btn px-3 py-1.5 flex items-center justify-center"
                  >
                    <SendHorizontal className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <div className="py-1.5">
                  <p className="text-game-muted text-center text-xs font-semibold">
                    no chatting while you draw!
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout - Similar structure with responsive adjustments */}
      <div className="relative lg:hidden flex flex-col h-full">
        {/* Name Header */}
        <>
          {!gameStarted ? (
            <div className="shrink-0 p-3">
              <Header roomId={roomId} />
            </div>
          ) : (
            <div className="py-3">
              <h1 className="logo-text-light text-2xl font-bold text-center lowercase">
                drawrush
              </h1>
            </div>
          )}
        </>

        {/* Game Info Bar */}
        {gameStarted && gamePhase !== "game-end" && (
          <div className="shrink-0 px-3 pb-2">
            <div className="game-panel p-2 flex items-center justify-between text-xs gap-3 flex-wrap">
              {/* round and current drawer name */}
              <div className="flex flex-col items-start justify-center gap-y-1 text-game-text">
                <div className="flex items-center gap-1.5">
                  <Palette className="w-4 h-4 text-game-blue" />
                  <p className="font-bold">
                    {truncateText(capitalizeFirst(getCurrentDrawerName()), 12)}
                  </p>
                </div>
                <div className="flex items-center gap-1.5">
                  <Trophy className="w-4 h-4 text-game-orange" />
                  <p className="font-bold">
                    {Math.max(1, currentRound)}/{maxRounds}
                  </p>
                </div>
              </div>

              {/* timer and word */}
              <div className="flex-1 flex flex-col gap-y-1 shrink-0 items-start justify-center">
                {gamePhase === "drawing" && (
                  <div className="flex items-center gap-2 flex-1">
                    {isCurrentPlayerDrawer ? (
                      <p className="font-bold text-game-text text-xs">
                        draw:{" "}
                        <span className="text-game-green-dark underline">
                          {capitalizeFirst(selectedWord)}
                        </span>
                      </p>
                    ) : (
                      <div className="flex gap-2">
                        <p className="font-bold text-game-text text-xs">
                          ({wordHint?.replace(/\s+/g, "")?.length}){" "}
                          <span className="text-game-blue-dark tracking-widest">
                            {wordHint}
                          </span>
                        </p>
                      </div>
                    )}
                  </div>
                )}
                <div className="flex justify-between items-center gap-2">
                  <div className="flex items-center gap-1 bg-gray-100 border-2 border-game-border px-2 py-0.5 rounded-md">
                    <Clock className="w-3.5 h-3.5 text-game-orange" />
                    {timeLeft > 0 ? (
                      <span className="text-game-orange font-bold">
                        {timeLeft}
                      </span>
                    ) : (
                      <span className="text-game-orange font-bold text-xs">
                        wait
                      </span>
                    )}
                  </div>
                  {!isCurrentPlayerDrawer && (
                    <HintDialog hint={aiHint} timeLeft={timeLeft} />
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Game Secion- Drawing board */}
        {!gameStarted && (
          <div className="shrink-0 px-3">
            <div className="game-panel overflow-hidden">
              {!gameStarted && currentPlayer?.id !== hostId && (
                <div style={{ height: "35vh", minHeight: "280px" }}>
                  <WaitingScreen />
                </div>
              )}

              {!gameStarted && currentPlayer?.id === hostId && (
                <SettingsScreen
                  roomCode={roomId}
                  playerId={currentPlayer?.id}
                  hostId={hostId}
                />
              )}
            </div>
          </div>
        )}
        {gameStarted && (
          <div className="shrink-0 px-3">
            <div
              className="game-panel overflow-hidden"
              style={{ height: "40vh", minHeight: "280px" }}
            >
              <DrawingBoard
                roomId={roomId}
                canDraw={isCurrentPlayerDrawer && gamePhase === "drawing"}
              />
            </div>
          </div>
        )}

        {/* PLayer card and chats */}
        <div className="flex-1 overflow-y-auto px-3 py-3 space-y-3 min-h-0">
          {/* chat box */}
          <div
            className="game-panel flex flex-col overflow-hidden"
            style={{ minHeight: "250px" }}
          >
            {/* header for chat */}
            <div className="flex text-game-text items-center gap-2 border-b-2 border-game-border p-2 bg-gray-50 shrink-0">
              <MessageCircle className="w-4 h-4 text-game-blue" />
              <span className="font-bold text-sm">chat</span>

              <div className="flex w-full justify-end">
                <VoiceChat
                  isCurrentPlayerDrawer={isCurrentPlayerDrawer}
                  roomCode={roomId}
                  playerId={currentPlayer?.id}
                />
              </div>
            </div>

            {/* display messages */}
            <div
              ref={mobileChatRef}
              className="flex-1 overflow-y-auto p-2 space-y-2 bg-white"
              style={{ minHeight: "200px", maxHeight: "350px" }}
            >
              {messages.map((msg, index) => {
                if (msg?.type == "player-joined") {
                  return <PlayerJoined key={index} message={msg?.message} />;
                } else if (msg?.type == "player-guessed") {
                  return <PlayerGuessed key={index} message={msg?.message} />;
                } else if (msg?.type == "updates") {
                  return <Updates key={index} message={msg?.message} />;
                } else if (msg?.type == "game-ended") {
                  return (
                    <GameEndedPlayersLeft key={index} message={msg?.message} />
                  );
                } else if (msg?.type == "spam-warning") {
                  return <SpamWarning key={index} message={msg?.message} />;
                } else {
                  return (
                    <MessageBox
                      key={`${msg.time}-${index}`}
                      SenderName={msg.senderName}
                      message={msg.message}
                      isOwnMessage={msg.senderId === currentPlayer?.id}
                    />
                  );
                }
              })}
            </div>

            {/* input message */}
            <div className="p-2 border-t-2 border-game-border bg-gray-50 shrink-0">
              {!isCurrentPlayerDrawer ? (
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={messageInput}
                    onChange={(e) => setMessageInput(e.target.value)}
                    disabled={enableSendMessage === false}
                    onKeyPress={handleKeyPress}
                    className="game-input flex-1 text-sm py-1.5"
                    placeholder={
                      gamePhase === "drawing" && !isCurrentPlayerDrawer
                        ? "type your guess..."
                        : "say something..."
                    }
                  />
                  <button
                    onClick={handleSendMessage}
                    className="game-btn-secondary game-btn px-3 py-1.5 flex items-center justify-center"
                  >
                    <SendHorizontal className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <div className="py-1.5">
                  <p className="text-game-muted text-center text-xs font-semibold">
                    no chatting while you draw!
                  </p>
                </div>
              )}
            </div>
          </div>

          <div
            className="game-panel flex flex-col overflow-hidden"
            style={{ minHeight: "250px" }}
          >
            <div className="flex text-game-text items-center justify-between gap-2 border-b-2 border-game-border p-3 bg-gray-50">
              <div className="flex justify-center items-center gap-2">
                <Gamepad2 className="w-4 h-4 text-game-blue" />
                <span className="font-bold text-sm">players</span>
                <span className="bg-game-blue text-white text-xs px-2 py-0.5 rounded-full font-bold">
                  {players.length}
                </span>
              </div>
              <div>
                <button
                  onClick={handleLeaveRoom}
                  className="px-2 py-1 rounded text-xs bg-red-500 border-2 border-red-600 text-white hover:bg-red-600 transition font-bold cursor-pointer"
                >
                  leave
                </button>
              </div>
            </div>

            <div
              className="flex-1 overflow-y-auto p-2 space-y-1.5 bg-white"
              style={{ minHeight: "100px", maxHeight: "250px" }}
            >
              {players.map((player) => (
                <PlayerCard
                  key={player.id}
                  player={player}
                  hostId={hostId}
                  isCurrentUser={currentPlayer?.id === player.id}
                  isDrawing={player.id === currentDrawer}
                  showScore={gameStarted}
                />
              ))}
            </div>

            {!gameStarted && (
              <div className="p-2 border-t-2 border-game-border bg-gray-50">
                <button
                  onClick={handleStartGame}
                  className="game-btn w-full py-2 text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={currentPlayer?.id !== hostId || players.length < 2}
                >
                  {currentPlayer?.id === hostId
                    ? "start!"
                    : "waiting for host..."}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameLobby;
