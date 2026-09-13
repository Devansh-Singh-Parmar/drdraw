"use client";
import { Toaster } from "react-hot-toast";

export default function ToasterProvider() {
  return (
    <Toaster
      position="top-center"
      reverseOrder={false}
      toastOptions={{
        duration: 3000,
        style: {
          background: "#ffffff",
          color: "#333333",
          border: "2px solid #b8b8b8",
          fontWeight: 600,
        },
      }}
    />
  );
}
