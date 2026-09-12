import { Fredoka, Nunito } from "next/font/google";
import ToasterProvider from "@/providers/ToasterProvider";

import "./global.css";

const fredoka = Fredoka({
  variable: "--font-fredoka",
  weight: ["600", "700"],
  subsets: ["latin"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  weight: ["400", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata = {
  title: "drdraw - draw & guess game",
  description:
    "drdraw is a multiplayer online game where players take turns drawing and guessing words. Join a room, draw your word, and guess what others are drawing in real-time!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${nunito.className} ${fredoka.className} antialiased bg-game-blue min-h-screen`}
      >
        <ToasterProvider />
        {children}
      </body>
    </html>
  );
}
