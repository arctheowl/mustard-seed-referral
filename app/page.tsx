"use client";

import Banner from "./components/banner";
import Image from "next/image";
import FAQs2 from "./components/faqs2";

export default function Home() {
  return (
    <div className="bg-slate-200">
      <Image
        src="/MustardSeed_Primary-Logo.png"
        alt="logo"
        width={200}
        height={200}
        className="left-10 top-10 absolute"
      />
      <div>
        <h1 className="text-center text-4xl font-bold text-black md:p-24 sm:p-12 p-2">

        </h1>
      </div>
      <Banner
        message="There is no need to refresh this page, you will automatically receive a random queue position when the countdown finishes. Please do not navigate away. Users who join the queue after the countdown has finished will be added to the end of the queue."
        countdown={10}
      />
      <FAQs2 />
      <footer className="row-start-3 text-center text-black">
        <p>© 2025 Mustard Seed Autism Referral Website</p>
      </footer>
    </div>
  );
}
