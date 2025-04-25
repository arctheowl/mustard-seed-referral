"use client";

import { useEffect, useState } from "react";
import { getTicket, insertData } from "../actions";
import TicketPage from "../components/referralForm";
import NoTicketPage from "../components/noTicketPage";

export default function Example() {
  const [ticket, setTicket] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

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
  }, []);

  const handleSubmit = (name: string, email: string) => {
    const userInfo = {
      name: name,
      email: email,
    };
    insertData(userInfo);
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-slate-200">
      <main className="flex flex-col row-start-2 items-center sm:items-start text-black">
        {parseInt(ticket) < 0 ? <NoTicketPage /> : <TicketPage />}
      </main>
    </div>
  );
}
