"use client";

import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";
import { useState } from "react";

export default function CountDown2({ children }: any) {
  const [data, setData] = useState<string>("2025-01-08 21:49:00");

  return (
    <FlipClockCountdown to={data} className="text-black">
      <div className="-mt-28">{children}</div>
    </FlipClockCountdown>
  );
}
