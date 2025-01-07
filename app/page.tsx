"use client";

import SignInPage from "./components/signIn";
import CountDown from "./components/countDown";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-slate-200">
      <main className="flex flex-col row-start-2 items-center sm:items-start text-black">
        <CountDown>
          <div>
            <SignInPage />
          </div>
        </CountDown>
      </main>
    </div>
  );
}
