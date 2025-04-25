import { useEffect, useState } from "react";
import ProgressBar from "./progressBar";
import Image from "next/image";
import PostalCodeValidator from "./postcode";
import { useRouter } from "next/navigation";
import TickBox from "./tickBox";
import { insertWaitlist } from "../actions";

export default function SignInPage() {
  useEffect(() => {
    requirements.map((requirement) => {
      return !(document.getElementById(requirement.name) as HTMLInputElement)
        ?.checked;
    });
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (waitlistCheck) {
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
    }
    // Redirect to the ticket page
    router.push("/ticket");
  };
  const [isValidPostCode, setIsValidPostCode] = useState<boolean | null>(false);
  const router = useRouter();

  const [email, setEmail] = useState<string>("");
  const [emailConsent, setEmailConsent] = useState<string>("");
  const [parentName, setParentName] = useState<string>("");
  const [postalCode, setPostalCode] = useState<string>("");
  const [childDOB, setChildDOB] = useState<string>("");
  const [waitlistCheck, setWaitlistCheck] = useState<boolean>(false);

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
    {
      id: "03",
      name: "Waitlist (optional)",
      description:
        "If I am unsuccessful in my application, I would like to be added to the waitlist.",
      required: false,
      waitlistCheck: waitlistCheck,
      setWaitlistCheck: setWaitlistCheck,
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
                  <input
                    id="dob"
                    name="dob"
                    type="date"
                    required
                    autoComplete="dob"
                    onChange={(e) => setChildDOB(e.target.value)}
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
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
      </div>
    </div>
  );
}
