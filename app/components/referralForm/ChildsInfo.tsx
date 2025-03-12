import Divider from "./divider";

interface PersonalInfoProps {
  setChildName: (name: string) => void;
  setChildDOB: (dob: string) => void;
  setParentName: (name: string) => void;
  setSiblings: (siblings: string) => void;
  setSchoolName: (schoolName: string) => void;
  setSchoolYear: (schoolYear: string) => void;
}

export const ChildInfo = ({ setChildName, setChildDOB, setParentName, setSiblings, setSchoolName, setSchoolYear }: PersonalInfoProps) => {
  return (
    <div className="">
      <Divider title={"Child's Information"} />
      <div className="grid grid-cols-2">
        <label className="block text-sm font-medium text-gray-700">
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
    </div>

  )
}