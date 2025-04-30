"use client";
import { useEffect, useState } from "react";
import SignInPage from "../components/signIn";
import { useRouter } from "next/navigation";
import { getTicket } from "../actions";

const EligibilityPage = () => {
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
    <div className="sm:p-10 font-[family-name:var(--font-geist-sans)] bg-slate-200">
      <SignInPage />
    </div>
  );
};

export default EligibilityPage;
