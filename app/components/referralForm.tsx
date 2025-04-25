"use client";

import { useEffect, useState } from "react";
import { getTicket, insertData } from "../actions";
import ProgressBar from "../components/progressBar";
import { Success, Error } from "./feedback";
import { PersonalInfo } from "./referralForm/PersonalInfo";
import { ChildInfo } from "./referralForm/ChildsInfo";
import { FamilyInfo } from "./referralForm/FamilyInfo";
import { DiagnosisInfo } from "./referralForm/Diagnosis";
import { Section2 } from "./referralForm/Section2";
import { ConsentInfo } from "./referralForm/Consent";

export default function TicketPage() {
  const [ticket, setTicket] = useState<string>("");
  const [userInfo, setUserInfo] = useState<any>({});
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  // const [eligibility, setEligibility] = useState<boolean>(false);
  const [signposted, setSignposted] = useState<string>("");
  const [childName, setChildName] = useState<string>("");
  const [childDOB, setChildDOB] = useState<string>("");
  const [parentName, setParentName] = useState<string>("");
  const [siblings, setSiblings] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [schoolName, setSchoolName] = useState<string>("");
  const [schoolYear, setSchoolYear] = useState<string>("");
  const [diagnosis, setDiagnosis] = useState<string>("");
  const [diagnosisDate, setDiagnosisDate] = useState<string>("");
  const [medication, setMedication] = useState<string>("");
  const [professionals, setProfessionals] = useState<string>("");
  const [secondEmail, setSecondEmail] = useState<string>("");

  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [show, setShow] = useState<boolean>(true);

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
  }, []);

  useEffect(() => {
    setUserInfo({
      name: name,
      email: email,
      secondEmail: secondEmail,
      signposted: signposted,
      childName: childName,
      childDOB: childDOB,
      parentName: parentName,
      siblings: siblings,
      address: address,
      phone: phone,
      schoolName: schoolName,
      schoolYear: schoolYear,
      diagnosis: diagnosis,
      diagnosisDate: diagnosisDate,
      medication: medication,
      professionals: professionals,
      eligibility: true,
    });
  }, [
    name,
    email,
    secondEmail,
    signposted,
    childName,
    childDOB,
    parentName,
    siblings,
    address,
    phone,
    schoolName,
    schoolYear,
    diagnosis,
    diagnosisDate,
    medication,
    professionals,
  ]);

  const delay = (ms: any) => new Promise((res) => setTimeout(res, ms));

  const handleSubmit = (userInfo: any) => {
    console.log(userInfo);
    console.log(
      insertData(userInfo)
        .then(() => setSuccess(true))
        .then(() => localStorage.removeItem("mustardSeedReferralTicket"))
        .then(() => setTicket(""))
        .then(() => (window.location.href = "/terms"))
        .catch((err) => {
          setError(true);
          console.log(err);
        })
    );
  };

  return (
    <div>
      {success && (
        <Success
          message="Your form has been submitted correctly. You will now be redirected"
          show={false}
          setShow={setShow}
        />
      )}
      {error && (
        <Error
          show={false}
          setShow={setShow}
          message={"Your form has not been submitted correctly."}
        />
      )}
      <main className="flex flex-col items-center sm:items-start text-black">
        {parseInt(ticket) < 0 ? (
          <h1 className="">
            No more tickets available very sorry but you have been added to the
            waitlist and you should also consider the following resources: 1.
            Branches{" "}
          </h1>
        ) : (
          <div>
            <ProgressBar step={1} />
            <form className="mb-4 w-1/2 mx-auto">
              <h1 className="text-6xl pt-10">Referral Form</h1>
              <PersonalInfo
                setName={setName}
                setEmail={setEmail}
                setSecondEmail={setSecondEmail}
                setAddress={setAddress}
                setPhone={setPhone}
                setSignposted={setSignposted}
              />
              <ChildInfo
                setChildName={setChildName}
                setChildDOB={setChildDOB}
                setParentName={setParentName}
                setSiblings={setSiblings}
                setSchoolName={setSchoolName}
                setSchoolYear={setSchoolYear}
              />
              <FamilyInfo
                setParentName={setParentName}
                setSiblings={setSiblings}
              />
              <DiagnosisInfo
                setMedication={setMedication}
                setDiagnosis={setDiagnosis}
                setDiagnosisDate={setDiagnosisDate}
                setProfessionals={setProfessionals}
              />
              <Section2 />
              <ConsentInfo />
              <button
                type="button"
                onClick={() => {
                  handleSubmit(userInfo);
                }}
                className="mt-6 w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Submit
              </button>
            </form>
          </div>
        )}
      </main>
    </div>
  );
}
