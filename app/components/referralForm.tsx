"use client";

import { useEffect, useState } from "react";
import { getTicket, insertData } from "../actions";
import ProgressBar from "../components/progressBar";
import { Success, Error } from "./feedback";
import { PersonalInfo } from "./referralForm/PersonalInfo";
import { ChildInfo } from "./referralForm/ChildsInfo";
import { FamilyInfo } from "./referralForm/FamilyInfo";
import { DiagnosisInfo } from "./referralForm/Diagnosis";
import { ChildsInterests } from "./referralForm/ChildsInterests";
import { ConsentInfo } from "./referralForm/Consent";
import FormCountDown from "./formCountdown";


export default function TicketPage() {
  const [ticket, setTicket] = useState<string>("");
  const [userInfo, setUserInfo] = useState<any>({});
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [secondEmail, setSecondEmail] = useState<string>("");
  const [signposted, setSignposted] = useState<string>("");
  const [childName, setChildName] = useState<string>("");
  const [childDOB, setChildDOB] = useState<string>("");
  const [parentNames, setParentNames] = useState<string>("");
  const [siblings, setSiblings] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [schoolName, setSchoolName] = useState<string>("");
  const [schoolYear, setSchoolYear] = useState<string>("");
  const [diagnosis, setDiagnosis] = useState<string>("");
  const [diagnosisDate, setDiagnosisDate] = useState<string>("");
  const [medication, setMedication] = useState<string>("");
  const [professionals, setProfessionals] = useState<string>("");
  const [interests, setInterests] = useState<string>("");
  const [interestsblob, setInterestsBlob] = useState<string>("");
  const [communicateWithOthers, setCommunicateWithOthers] = useState<string>("");
  const [followInstructions, setFollowInstructions] = useState<string>("");
  const [visualSupport, setVisualSupport] = useState<string>("");
  const [highlyAnxious, setHighlyAnxious] = useState<string>("");
  const [recogniseEmotions, setRecogniseEmotions] = useState<string>("");
  const [attendSchool, setAttendSchool] = useState<string>("");
  const [selfHarm, setSelfHarm] = useState<string>("");
  const [areasOfDifficulty, setAreasOfDifficulty] = useState<string>("");
  const [dailySkills, setDailySkills] = useState<string>("");
  const [additionalSupport, setAdditionalSupport] = useState<string>("");
  const [socialCommunication, setSociailCommunication] = useState<string>("");
  const [consent, setConsent] = useState<string>("");


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
      parentNames: parentNames,
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
      interests: interests,
      interestsblob: interestsblob,
      communicateWithOthers: communicateWithOthers,
      followInstructions: followInstructions,
      visualSupport: visualSupport,
      socialCommunication: socialCommunication,
      highlyAnxious: highlyAnxious,
      recogniseEmotions: recogniseEmotions,
      attendSchool: attendSchool,
      selfHarm: selfHarm,
      areasOfDifficulty: areasOfDifficulty,
      dailySkills: dailySkills,
      additionalSupport: additionalSupport,
      consent: consent,
    });
  }, [
    name,
    email,
    secondEmail,
    signposted,
    childName,
    childDOB,
    parentNames,
    siblings,
    address,
    phone,
    schoolName,
    schoolYear,
    diagnosis,
    diagnosisDate,
    medication,
    professionals,
    interests,
    interestsblob,
    communicateWithOthers,
    followInstructions,
    visualSupport,
    socialCommunication,
    highlyAnxious,
    recogniseEmotions,
    attendSchool,
    selfHarm,
    areasOfDifficulty,
    dailySkills,
    additionalSupport,
    consent,
  ]);

  const handleSubmit = (userInfo: any) => {
    console.log(
      insertData(userInfo)
        .then(() => setSuccess(true))
        // .then(() => localStorage.removeItem("mustardSeedReferralTicket"))
        // .then(() => setTicket(""))
        // .then(() => (window.location.href = "/terms"))
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
          message={"Your form has not been submitted correctly. Please refresh the page and try again."}
        />
      )}
      <main className="md:flex md:flex-col md:items-center sm:items-start text-black">
        <div>
          <ProgressBar step={1} />
          <form className="md:mb-4 md:w-1/2 md:mx-auto">
            <div className="md:flex md:flex-col md:items-center md:justify-center md:w-full md:h-full">
              <h1 className="text-6xl pt-10">Referral Form</h1>
              <FormCountDown />
            </div>

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
              setSchoolName={setSchoolName}
              setSchoolYear={setSchoolYear}
            />
            <FamilyInfo
              setParentNames={setParentNames}
              setSiblings={setSiblings}
            />
            <DiagnosisInfo
              setMedication={setMedication}
              setDiagnosis={setDiagnosis}
              setDiagnosisDate={setDiagnosisDate}
              setProfessionals={setProfessionals}
            />
            <ChildsInterests
              setInterests={setInterests}
              setInterestsBlob={setInterestsBlob}
              setCommunicateWithOthers={setCommunicateWithOthers}
              setFollowInstructions={setFollowInstructions}
              setVisualSupport={setVisualSupport}
              setHighlyAnxious={setHighlyAnxious}
              setRecogniseEmotions={setRecogniseEmotions}
              setAttendSchool={setAttendSchool}
              setSelfHarm={setSelfHarm}
              setAreasOfDifficulty={setAreasOfDifficulty}
              setDailySkills={setDailySkills}
              setAdditionalSupport={setAdditionalSupport}
              setSociailCommunication={setSociailCommunication}
            />
            <ConsentInfo setConsent={setConsent} />
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
      </main>
    </div>
  );
}
