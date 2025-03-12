
interface PersonalInfoProps {
  setParentName: (name: string) => void;
  setSiblings: (siblings: string) => void;
}

const siblings = [
  { name: "Sibling 1", age: "Age" },
]

export const SiblingInfo = ({ }: PersonalInfoProps) => {
  return (
    <div className="">
      <div className="grid grid-cols-12 gap-4">
        <label className="col-span-8 block text-sm font-medium text-gray-700">
          Siblings Names

          {siblings.map((sibling, index) => (
            <div key={index} className="">
              <input
                onChange={(e) => (e.target.value)}
                type="text"
                name="siblings"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm col-span-5"
              />

            </div>
          ))}
        </label>
        <label className="col-span-3 block text-sm font-medium text-gray-700">
          Age
          {siblings.map((sibling, index) => (
            <div key={index} className="">
              <input
                onChange={(e) => (e.target.value)}
                type="number"
                name="siblings"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm col-span-5"
              />
            </div>
          ))}
        </label>

        <button onClick={(e) => {
          e.preventDefault()
          siblings.push({ name: "Sibling", age: "Age" })
        }}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
        </button>

      </div>
    </div>

  )
}