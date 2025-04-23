import { useEffect, useState } from "react";
import ProgressBar from "./progressBar";
import Image from "next/image";
import PostalCodeValidator from "./postcode";
import { useRouter } from "next/navigation";
import tickBox from "./tickBox";
import TickBox from "./tickBox";

export default function SignInPage() {
  useEffect(() => {
    requirements.map((requirement) => {
      return !(document.getElementById(requirement.name) as HTMLInputElement)
        ?.checked;
    });
  });
  const [isValidPostCode, setIsValidPostCode] = useState<boolean | null>(false);
  const router = useRouter();

  const requirements = [
    {
      id: "01",
      name: "Locality",
      description:
        "By ticking this box you are confirming that you live wihtin the locality of the programme.",
      required: true,
    },
    {
      id: "03",
      name: "Email Consent",
      description:
        "I confirm that I am submitting my email address to receive updates on this application.",
      required: true,
    },
    {
      id: "03",
      name: "Waitlist (optional)",
      description:
        "If I am unsuccessful in my application, I would like to be added to the waitlist.",
      required: false,
    },
  ];

  return (
    <div className="grid grid-cols-2 bg-white rounded py-10">
      <div className="relative hidden lg:block lg:flex-1">
        <Image src="/MustardSeed_Primary-Logo.png" alt="hero" layout="fill" />
      </div>

      <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <ProgressBar step={0} />
        <div className="mx-auto w-full max-w-sm lg:w-96 pt-10">

          <div className="mt-6">

            <form
              action={() => router.push("/ticket")}
              method="POST"
              className="space-y-6"
            >
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
                  <input
                    id="dob"
                    name="dob"
                    type="date"
                    required
                    autoComplete="dob"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>
              <PostalCodeValidator isValidPostCode={isValidPostCode} setIsValidPostCode={setIsValidPostCode} />
              <fieldset>
                <legend className="sr-only">Eligibility Requirements</legend>
                <div className="space-y-5">
                  {requirements.map((requirement) => (
                    TickBox(requirement)
                  ))}
                </div>
              </fieldset>
              <div>
                <button
                  // type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed"
                  onSubmit={(e) => {
                    if (isValidPostCode) {
                      router.push("/ticket");
                    } else {
                      // Handle invalid postcode
                      e.preventDefault();

                      alert("Please enter a valid postcode");

                    }
                  }}
                >
                  Progress
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
