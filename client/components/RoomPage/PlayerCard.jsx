import { Crown, Palette } from "lucide-react";
import { createAvatar } from "@dicebear/core";
import Image from "next/image";
import { bottts } from "@dicebear/collection";
import { capitalizeFirst } from "@/utils/utils";

const PlayerCard = ({
  player,
  hostId,
  isCurrentUser,
  isDrawing = false,
  showScore = false,
}) => {
  const isHost = player.id === hostId;
  const isOnline = player.status === "online";

  const avatar = createAvatar(bottts, {
    seed: player.name,
    backgroundColor: ["b6e3f4", "c0aede", "d1d4f9"],
  });

  const image = avatar.toDataUri();

  return (
    <div
      className={`relative p-2 rounded-md border-2 transition-all ${
        isDrawing
          ? "bg-green-50 border-game-green"
          : isCurrentUser
            ? "bg-blue-50 border-game-blue"
            : "bg-white border-game-border"
      } ${!isOnline && "opacity-50"}`}
    >
      {isDrawing && (
        <div className="absolute -top-2 -right-1 bg-game-green text-white text-[10px] font-bold px-1.5 py-0.5 rounded flex items-center gap-0.5">
          <Palette className="w-2.5 h-2.5" />
          drawing
        </div>
      )}

      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full overflow-hidden shrink-0 border border-game-border">
          <Image
            src={image}
            width={32}
            height={32}
            className="rounded-full"
            alt={player.name}
          />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1">
            <span className="font-bold text-sm truncate text-game-text">
              {capitalizeFirst(player.name)}
            </span>
            {isHost && (
              <Crown className="w-3.5 h-3.5 text-game-orange shrink-0" />
            )}
            {isCurrentUser && (
              <span className="text-[10px] bg-game-blue text-white px-1.5 py-0.5 rounded font-bold shrink-0">
                you
              </span>
            )}
          </div>

          {showScore && (
            <div className="text-xs font-bold text-game-green-dark">
              {player.score || 0} pts
            </div>
          )}
        </div>

        <div
          className={`w-2 h-2 rounded-full shrink-0 ${isOnline ? "bg-game-green" : "bg-red-400"}`}
        />
      </div>
    </div>
  );
};
export default PlayerCard;
