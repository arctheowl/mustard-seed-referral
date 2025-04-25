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
  return (
    <div className="">
      <Divider title={"Diagnosis Information"} />
      <div className="grid grid-cols-2 gap-4">
        <label className="block text-sm font-medium text-gray-700">
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
        <label className="block text-sm font-medium text-gray-700">
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
    </div>
  );
};
