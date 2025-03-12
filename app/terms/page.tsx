"use client";

import ProgressBar from "../components/progressBar";
import { Terms } from "../components/referralForm/Terms";

export default function TicketPage() {
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
