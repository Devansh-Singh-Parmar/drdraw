import { createAvatar } from "@dicebear/core";
import { bottts } from "@dicebear/collection";
import Image from "next/image";
import { capitalizeFirst } from "@/utils/utils";

const MessageBox = ({ SenderName, message, isOwnMessage }) => {
  const avatar = createAvatar(bottts, {
    seed: SenderName,
    backgroundColor: ["b6e3f4", "c0aede", "d1d4f9"],
  });

  const image = avatar.toDataUri();

  return (
    <div className="flex items-start gap-2">
      <div className="shrink-0">
        <Image
          src={image}
          width={28}
          height={28}
          className="rounded-full border border-game-border"
          alt={SenderName || "icon"}
        />
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-bold text-sm text-game-blue-dark">
          {capitalizeFirst(SenderName)}
          {isOwnMessage && (
            <span className="pl-1 text-game-muted text-xs font-semibold">
              (you)
            </span>
          )}
        </p>
        <p className="text-sm text-game-text wrap-break-word">{message}</p>
      </div>
    </div>
  );
};

export default MessageBox;
