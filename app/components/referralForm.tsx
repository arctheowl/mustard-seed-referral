"use client";

import { useEffect, useState } from "react";
import { getTicket, insertData } from "../actions";
import ProgressBar from "../components/progressBar";
import { Success, Error } from "./feedback";

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

  const delay = (ms: any) => new Promise(res => setTimeout(res, ms));

  const handleSubmit = (userInfo: any) => {
    console.log(userInfo);
    console.log(insertData(userInfo)
      .then(() => setSuccess(true))
      .then(() => localStorage.removeItem("mustardSeedReferralTicket"))
      .then(() => setTicket(""))
      .then(async () => {
        await delay(5000)
        window.location.href = "/submitted"
      })
      .catch((err) => {
        setError(true)
        console.log(err)
      }));
  };

  return (
    <div>
      { success && <Success message="Your form has been submitted correctly. You will now be redirected" show={false} setShow={setShow} /> }
      { error && <Error show={false} setShow={setShow} message={"Your form has not been submitted correctly."} /> }
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
              <h1 className="">This is your ticket number {ticket}</h1>
              <h1 className="text-6xl">Referral Form</h1>
              <label className="block text-sm font-medium text-gray-700">
                Full Name
                <input
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  name="name"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </label>
              <label className="block text-sm font-medium text-gray-700 mt-4">
                Email Address to Contact You
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  name="email"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </label>
              <label className="block text-sm font-medium text-gray-700 mt-4">
                Second Email Address
                <input
                  onChange={(e) => setSecondEmail(e.target.value)}
                  type="SecondEmail"
                  name="SecondEmail"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </label>
              <p className="mt-4">
                The majority of our groups and interventions take place in
                school hours, Mondays-Fridays, term time only. If you are not
                able to bring your child to sessions during these times we will
                not be able to offer face to face support but will signpost you
                to other services. Please confirm you would be able to bring
                your child to sessions at these times.
              </p>
              <label className="block text-sm font-medium text-gray-700 mt-4">
                Signposted to Mustard Seed via......
                <select
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  name="signposted"
                  onChange={(e) => setSignposted(e.target.value)}
                >
                  <option>Paediatrician</option>
                  <option>School</option>
                  <option>Health professional</option>
                  <option>Children's Services</option>
                  <option>CAMHS</option>
                  <option>Mustard Seed social media/website</option>
                  <option>Word of mouth</option>
                </select>
              </label>
              <h2 className="mt-10">Child's Information</h2>
              <div className="grid grid-cols-2">
                <label className="block text-sm font-medium text-gray-700 mt-4">
                  Child's Name
                  <input
                    onChange={(e) => setChildName(e.target.value)}
                    type="text"
                    name="childName"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </label>
                <label className="block text-sm font-medium text-gray-700 mt-4">
                  Child's Date of Birth
                  <input
                    onChange={(e) => setChildDOB(e.target.value)}
                    type="date"
                    name="childDOB"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </label>
              </div>
              <h2 className="mt-10">Family Information</h2>
              <div className="grid grid-cols-2 gap-4">
                <label>
                  Parent/Carers Names
                  <input
                    onChange={(e) => setParentName(e.target.value)}
                    type="text"
                    name="parentName"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </label>
                <label>
                  Siblings Names and Ages
                  <input
                    onChange={(e) => setSiblings(e.target.value)}
                    type="text"
                    name="siblings"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </label>
              </div>
              <h2>Contact Information</h2>
              <div className="grid grid-cols-2 gap-4">
                <label>
                  Address
                  <input
                    onChange={(e) => setAddress(e.target.value)}
                    type="text"
                    name="address"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </label>
                <label>
                  Telephone Number
                  <input
                    onChange={(e) => setPhone(e.target.value)}
                    type="tel"
                    name="phone"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </label>
              </div>
              <h2 className="mt-10">School Information</h2>
              <div className="grid grid-cols-2 gap-4">
                <label>
                  School Name
                  <input
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    type="text"
                    name="schoolName"
                    onChange={(e) => setSchoolName(e.target.value)}
                  />
                </label>
                <label>
                  Current School Year Group
                  <select
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    onChange={(e) => setSchoolYear(e.target.value)}
                  >
                    <option>Year 1</option>
                    <option>Year 2</option>
                    <option>Year 3</option>
                    <option>Year 4</option>
                    <option>Year 5</option>
                    <option>Year 6</option>
                    <option>Year 7</option>
                  </select>
                </label>
              </div>
              <h2 className="mt-10">Diagnosis</h2>
              <div className="grid grid-cols-2 gap-4">
                <label className="block text-sm font-medium text-gray-700 mt-4">
                  Diagnosis
                  <select
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    onChange={(e) => setDiagnosis(e.target.value)}
                  >
                    <option>Autism</option>
                    <option>ADHD</option>
                    <option>Other</option>
                    <option>Undiagnosed</option>
                  </select>
                </label>
                <label className="block text-sm font-medium text-gray-700 mt-4">
                  Date of Diagnosis
                  <input
                    onChange={(e) => setDiagnosisDate(e.target.value)}
                    type="date"
                    name="diagnosisDate"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </label>
              </div>
              <label>
                Medical Needs/Medication
                <input
                  onChange={(e) => setMedication(e.target.value)}
                  type="text"
                  name="medication"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </label>
              <label>
                Professionals Currently Involved
                <select
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  onChange={(e) => setProfessionals(e.target.value)}
                >
                  <option>Occupational Therapist</option>
                  <option>Speech and Language Therapist</option>
                  <option>Play Therapist</option>
                  <option>Educational Psychologist</option>
                  <option>Physiotherapist</option>
                  <option>Children's Services</option>
                  <option>Counselling</option>
                  <option>Other</option>
                </select>
              </label>
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
