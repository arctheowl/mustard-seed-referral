import Divider from "./divider";

interface PersonalInfoProps {
  setParentName: (name: string) => void;
  setSiblings: (siblings: string) => void;
}

export const FamilyInfo = ({ setParentName, setSiblings }: PersonalInfoProps) => {
  return (
    <div className="">
      <Divider title={"Family Information"} />
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
    </div>

  )
}