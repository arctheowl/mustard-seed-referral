import Divider from "./divider";

interface ManagingEmotionsProps {

}

export const ManagingEmotions = ({ }: ManagingEmotionsProps) => {
  return (
    <div className="">
      <Divider title={"Managing Emotions"} />
      <div className="grid grid-cols-2">
        <label className="block text-sm font-medium text-gray-700">
          Is Your Child Highly Anxious?
          <select className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
            <option>Yes</option>
            <option>No </option>
          </select>
        </label>
        <label className="block text-sm font-medium text-gray-700">
          Does your child understand and recognise basic emotions?
          <select className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
            <option>Own emotions</option>
            <option>Other people's emotions </option>
            <option>Very limited/no recognition </option>
            <option>Their's and other's emotions </option>
          </select>
        </label>
        <label className="block text-sm font-medium text-gray-700">
        Does your child struggle to attend school?
          <select className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
            <option>Yes</option>
            <option>No </option>
            <option>Sometimes</option>
            <option>Currently out of school</option>
            <option>Home educated</option>
          </select>
        </label>
        <label className="block text-sm font-medium text-gray-700">
        Does your child...
          <select className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
            <option>Self harm</option>
            <option>Present violent behaviour towards others </option>
            <option>Engage in destructive behaviours</option>
            <option>None of the above</option>
          </select>
        </label>

      </div>
    </div>

  )
}