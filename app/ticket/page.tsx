"use client";

import { useEffect, useState } from "react";
import { getTicket, insertData } from "../actions";
import ProgressBar from "../components/progressBar";

export default function TicketPage() {
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
        {parseInt(ticket) < 0 ? (
          <h1 className="">
            No more tickets available very sorry but you have been added to the
            waitlist and you should also consider the following resources: 1)
            Branches{" "}
          </h1>
        ) : (
          <div>
            <ProgressBar step={1} />
            <h1 className="">This is your ticket number {ticket}</h1>
            <h1 className="text-6xl">Referral Form</h1>
            <form className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Name
                <input
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  name="name"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </label>
              <label className="block text-sm font-medium text-gray-700 mt-4">
                Email
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  name="email"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </label>
              <button
                type="button"
                onClick={() => {
                  handleSubmit(name, email);
                }}
                className="mt-6 w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Submit
              </button>
            </form>
          </div>
        )}
      </main>
    </div>
  );
}
