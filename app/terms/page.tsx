"use client";

import { useRouter } from "next/navigation";
import ProgressBar from "../components/progressBar";
import { Terms } from "../components/referralForm/Terms";
import { useEffect, useState } from "react";
import { getTicket } from "../actions";

export default function TicketPage() {
  const [ticket, setTicket] = useState<string>("");
  const router = useRouter();

  useEffect(() => {
    if (
      !localStorage.getItem("mustardSeedReferralTicket") ||
      localStorage.getItem("mustardSeedReferralTicket") === ""
    ) {
      getTicket().then((data: any) => {
        setTicket(data[0].ticket_number);
        localStorage.setItem(
          "mustardSeedReferralTicket",
          data[0].ticket_number
        );
      });
    } else {
      setTicket(localStorage.getItem("mustardSeedReferralTicket") || "");
    }
    if (
      !localStorage.getItem("mustardCountDownComplete") ||
      localStorage.getItem("mustardCountDownComplete") === ""
    ) {
      console.log(
        "You are not eligible to access this page. Please wait for the countdown to finish."
      );
      router.push("/");
    }
  }, []);
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-slate-200">
      <main className="flex flex-col row-start-2 items-center sm:items-start text-black w-1/2">
        <div>
          <ProgressBar step={2} />
          <Terms />
        </div>
      </main>
    </div>
  );
}
