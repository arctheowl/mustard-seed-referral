"use client";

import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";
import { useState } from "react";

export default function FormCountDown({ children }: any) {
  const [data, setData] = useState<string>("2025-04-30 22:15:00");

  return (
    <div className="md:flex md:flex-col md:items-center md:justify-center md:w-full md:h-full hidden">
      <FlipClockCountdown
        to={data}
        className="text-black text-sm"
        onComplete={() => {}}
        style={{
          fontSize: "1rem",
          fontWeight: "bold",
          color: "#000000",
          backgroundColor: "",
          borderRadius: "0.5rem",
          padding: "0.5rem",
        }}
      >
        <div className="">{children}</div>
      </FlipClockCountdown>
    </div>
  );
}
