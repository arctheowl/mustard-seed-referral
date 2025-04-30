import { useState } from "react";
import DatePicker from "../../components/datePicker";
import MultiSelect from "../multiSelect";
import Divider from "./divider";

interface PersonalInfoProps {
  setMedication: (name: string) => void;
  setDiagnosis: (siblings: string) => void;
  setDiagnosisDate: (diagnosisDate: string) => void;
  setProfessionals: (professionals: string) => void;
}

export const DiagnosisInfo = ({
  setMedication,
  setDiagnosis,
  setDiagnosisDate,
  setProfessionals,
}: PersonalInfoProps) => {
  const [diagnosisDate, setDiagnosisDateState] = useState<Date>(new Date());
  const handleDiagnosisDateChange = (date: Date | null) => {
    if (date) {
      setDiagnosisDateState(date);
      // Format the date to YYYY-MM-DD

      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const day = String(date.getDate()).padStart(2, "0");
      const formattedDate = `${year}-${month}-${day}`;

      setDiagnosisDate(formattedDate);
    }
  };
  const handleDiagnosisChange = (selectedOptions: any) => {
    const selectedValues = selectedOptions.map((option: any) => option.value);
    setDiagnosis(selectedValues.join(", "));
  };

  const handleProfessionalsChange = (selectedOptions: any) => {
    const selectedValues = selectedOptions.map((option: any) => option.value);
    setProfessionals(selectedValues.join(", "));
  };

  return (
    <div className="">
      <Divider title={"Diagnosis Information"} />
      <div className="grid grid-cols-2 gap-4">
        <label className="block text-sm font-medium text-gray-700">
          Diagnosis
          <MultiSelect
            options={[
              { value: "Autism", label: "Autism" },
              { value: "ADHD", label: "ADHD" },
              { value: "Other", label: "Other" },
              { value: "Undiagnosed", label: "Undiagnosed" },
            ]}
            onChange={handleDiagnosisChange}
            isMulti={false}
            name={"Diagnosis"}
          />
        </label>
        <label className="block text-sm font-medium text-gray-700">
          Date of Diagnosis if Diagnosed
          <DatePicker
            dateValue={diagnosisDate}
            //@ts-ignore
            dateChange={handleDiagnosisDateChange}
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
        <MultiSelect
          options={[
            {
              value: "Occupational Therapist",
              label: "Occupational Therapist",
            },
            {
              value: "Speech and Language Therapist",
              label: "Speech and Language Therapist",
            },
            { value: "Play Therapist", label: "Play Therapist" },
            {
              value: "Educational Psychologist",
              label: "Educational Psychologist",
            },
            { value: "Physiotherapist", label: "Physiotherapist" },
            { value: "Children's Services", label: "Children's Services" },
            { value: "Counselling", label: "Counselling" },
            { value: "Other", label: "Other" },
            { value: "None", label: "None" },
          ]}
          onChange={handleProfessionalsChange}
          isMulti={false}
          name={"Professionals Currently Involved"}
        />
      </label>
    </div>
  );
};
