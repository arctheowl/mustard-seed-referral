"use client";

import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";
import { useEffect, useState } from "react";
import { getCountDownTime } from "../actions";

export default function CountDown2({ children }: any) {
  const [data, setData] = useState<string>("2025-04-30 21:49:00");
  useEffect(() => {
    getCountDownTime().then((data: any) => {
      setData(data[0].time);
    });
  }, []);

  return (
    <FlipClockCountdown to={data} className="text-black">
      <div className="-mt-28">{children}</div>
    </FlipClockCountdown>
  );
}
