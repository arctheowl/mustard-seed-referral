"use client";

import SignInPage from "./components/signIn";
import CountDown from "./components/countDown";
import Banner from "./components/banner";
import Image from "next/image";
import FAQs2 from "./components/faqs2";

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
        message="There is no need to refresh this page, you will automatically receive a random queue position when the countdown finishes. Please do not navigate away. Users who join the queue after the countdown has finished will be added to the end of the queue."
        countdown={10}
      />
      <main className="row-start-2 text-black pt-48 mx-auto place-items-center">
        <CountDown>
          <div>
            <SignInPage />
          </div>
        </CountDown>

        <div className="text-black pt-24 w-full flex">
          <FAQs2 />
        </div>
      </main>
      <footer className="row-start-3 text-center text-black">
        <p>© 2025 Mustard Seed Autism Referral Website</p>
      </footer>
    </div>
  );
}
