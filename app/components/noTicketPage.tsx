"use client";
import Image from "next/image";
import BannerNoCountdown from "./bannerNoCountdown";
import { insertWaitlist } from "../actions";
import { useState } from "react";
import PostalCodeValidator from "./postcode";
import TickBox from "./tickBox";
import DatePickerInput from "./datePicker";

const requirements = [
  {
    id: "01",
    name: "Locality",
    description:
      "By ticking this box you are confirming that you live wihtin the locality of the programme.",
    required: true,
  },
  {
    id: "02",
    name: "Email Consent",
    description:
      "I confirm that I am submitting my email address to receive updates on this application.",
    required: true,
  },
];

export default function NoTicketPage() {
  const [email, setEmail] = useState<string>("");
  const [emailConsent, setEmailConsent] = useState<string>("");
  const [parentName, setParentName] = useState<string>("");
  const [postalCode, setPostalCode] = useState<string>("");
  const [childDOB, setChildDOB] = useState<string>("");
  const [isValidPostCode, setIsValidPostCode] = useState<boolean | null>(false);
  const [dateValue, dateChange] = useState<Date | null>(new Date("2015-08-31"));

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const waitlistInfo = {
      email: email,
      childDOB: childDOB.toString(),
      postalCode: postalCode,
      parentName: parentName.trim(),
      emailConsent: emailConsent,
    };
    // Call your API or perform any action with the userInfo
    console.log(
      insertWaitlist(waitlistInfo)
        .then(() => console.log("Success"))
        .catch((err) => {
          console.log(err);
        })
    );
  };

  const onDateChange = (date: Date | null) => {
    if (date) {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const day = String(date.getDate()).padStart(2, "0");
      const formattedDate = `${year}-${month}-${day}`;

      setChildDOB(formattedDate);
      dateChange(date);
    }
  };

  return (
    <div className="bg-slate-200">
      <Image
        src="/MustardSeed_Primary-Logo.png"
        alt="logo"
        width={200}
        height={200}
        className="left-10 top-10 absolute"
        priority
      />
      <BannerNoCountdown />
      <div className="mx-auto w-full max-w-sm lg:w-96 pt-10">
        <div className="mt-6">
          <form className="space-y-6" onSubmit={(e) => handleSubmit(e)}>
            <div>
              <label
                htmlFor="name"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Parent/Guardian Name
              </label>
              <div className="">
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  onChange={(e) => setParentName(e.target.value)}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Email address
              </label>
              <div className="">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>
            <div className="mt-6">
              <label
                htmlFor="email"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Date of Birth of Child
              </label>
              <div className="">
                <DatePickerInput
                  dateValue={dateValue}
                  //@ts-ignore
                  dateChange={onDateChange}
                />
              </div>
            </div>
            <PostalCodeValidator
              isValidPostCode={isValidPostCode}
              setIsValidPostCode={setIsValidPostCode}
              postalCode={postalCode}
              setPostalCode={setPostalCode}
            />
            <fieldset>
              <legend className="sr-only">Eligibility Requirements</legend>
              <div className="space-y-5">
                {requirements.map((requirement) => TickBox(requirement))}
              </div>
            </fieldset>
            <div>
              <button
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed"
                type="submit"
              >
                Progress
              </button>
            </div>
          </form>
        </div>
      </div>
      <footer className="row-start-3 text-center text-black">
        <p>© 2025 Mustard Seed Autism Referral Website</p>
      </footer>
    </div>
  );
}
