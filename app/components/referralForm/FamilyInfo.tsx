import Divider from "./divider";
import { SiblingInfo } from "./Siblings";

interface PersonalInfoProps {
  setParentName: (name: string) => void;
  setSiblings: (siblings: string) => void;
}

const siblings = [
  { name: "Sibling 1", age: "Age" },
]

export const FamilyInfo = ({ setParentName, setSiblings }: PersonalInfoProps) => {
  return (
    <div className="">
      <Divider title={"Family Information"} />
      <div className="grid grid-cols-2 gap-4">
        <label>
          Parent/Carers Names
          <div className="flex items-center">
            <input
              onChange={(e) => setParentName(e.target.value)}
              type="text"
              name="parentName"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
          </div>
        </label>
      </div>
      <SiblingInfo setParentName={function (name: string): void {
        throw new Error("Function not implemented.");
      } } setSiblings={function (siblings: string): void {
        throw new Error("Function not implemented.");
      } } />
    </div>

  )
}