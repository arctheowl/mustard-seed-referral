"use client";

import SignInPage from "./components/signIn";
import CountDown from "./components/countDown";
import Banner from "./components/banner";
import Image from "next/image";
import Resources from "./components/resources";
import FAQs from "./components/faqs";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-slate-200">
      <Image
        src="/MustardSeed_Primary-Logo.png"
        alt="logo"
        width={200}
        height={200}
        className="left-10 top-10 absolute"
      />
      <Banner
        message="There is no need to refresh this page. Please do not navigate away."
        countdown={10}
      />
      <main className="flex flex-col row-start-2 items-center sm:items-start text-black">
        <CountDown>
          <div>
            <SignInPage />
          </div>
        </CountDown>

        <div className="flex flex-row justify-around space-y-4 text-black pt-24 w-full">
          <Resources />
          <FAQs />
        </div>
      </main>
      <footer className="row-start-3 text-center text-black">
        <p>© 2025 Referral Website</p>
      </footer>
    </div>
  );
}
