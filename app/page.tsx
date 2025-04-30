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
        <h1 className="text-center text-4xl font-bold text-black md:p-24 sm:p-12 p-2"></h1>
      </div>
      <Banner message="There is no need to refresh this page, you will automatically receive a random queue position when the countdown finishes. The wait room will be live at 7:00 PM on the 30th of April. At 8:00 PM the countdown will finish and you will be randomly assigned a queue position. You will then be able to complete the referral form if prompted to do so. If you are not taken to a form, you will be asked to join the waitlist for future consideration." />
      <FAQs2 />
      <footer className="row-start-3 text-center text-black">
        <p>© 2025 Mustard Seed Autism Referral Website</p>
      </footer>
    </div>
  );
}
