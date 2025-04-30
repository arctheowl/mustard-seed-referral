import Divider from "./divider";

interface AdditionalInfoProps {
  setAdditionalSupport: (value: string) => void;
}

export const AdditionalInfo = ({ setAdditionalSupport }: AdditionalInfoProps) => {
  return (
    <div className="">
      <Divider title={"Additional Information"} />
      <div className="gap-4">
        <label>
          Please list specific difficulties you would like support for:
          <input
            onChange={(e) => setAdditionalSupport(e.target.value)}
            type="textarea"
            name="parentName"
            className="mt-1 block w-full h-28 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </label>

      </div>
    </div>

  )
}