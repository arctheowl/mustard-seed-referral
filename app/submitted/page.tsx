"use client";
import Image from "next/image";
import Link from "next/link";

export default function SubmittedPage() {
  return (
    <div className="bg-slate-200 h-screen flex flex-col justify-center items-center">
      <Image
        src="/MustardSeed_Primary-Logo.png"
        alt="logo"
        width={200}
        height={200}
        className="left-10 top-10 absolute"
        priority
      />

      <div className="rounded text-center bg-green-400 text-black p-4 w-2/3 top-48">
        <div className="center mx-auto">
          <div className="text-4xl">Thank You!</div>
          <div className="text-2xl">
            Your form has been successfully submitted.
          </div>
          <div className="text-2xl">
            We aim to provide an email confirmation by end of day tomorrow.
          </div>
          <div className="text-2xl">
            Final place allocations will take 2 weeks
          </div>
          <div className="text-2xl">
            Visit us at{" "}
            <Link
              href="https://mustardseedautism.co.uk/"
              target="_blank"
              className="text-blue-500 hover:underline"
            >
              MustardSeedAutism.co.uk
            </Link>
          </div>
        </div>
      </div>

      <footer className="row-start-3 text-center text-black">
        <p>© 2025 Mustard Seed Autism Referral Website</p>
      </footer>
    </div>
  );
}
