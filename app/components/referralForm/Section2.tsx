import { AdditionalInfo } from "./AdditionalInfo";
import Divider from "./divider";
import { ManagingEmotions } from "./ManagingEmtions";
import { SensorySkills } from "./SensorySkills";

interface PersonalInfoProps {

}

export const Section2 = ({ }: PersonalInfoProps) => {
  return (
    <div className="">
      <Divider title={"Child's Information"} />
      <div className="grid grid-cols-2 items-center align-middle">
        <label className="block text-sm font-medium text-gray-700">
          Child's Strengths and Interests
          <input
            onChange={(e) => (e.target.value)}
            type="text"
            name="childName"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </label>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 mt-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
        <label className="block text-sm font-medium text-gray-700 mt-4 col-span-2">
          Description of Child's Strengths and Interests (Optional)
          <textarea
            onChange={(e) => (e.target.value)}
            name="childName"
            className="mt-1 block w-full h-28 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </label>
        <label>
          How does the child communicate with others?
          <select
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            onChange={(e) => (e.target.value)}
          >
            <option>Non-verbal (very limited or no verbal communication)</option>
            <option>Non-verbal  (uses PECS or Makaton)</option>
            <option>Early stages of speech (babbling/ echolalia)</option>
            <option>Verbal (short phrases only)</option>
            <option>Verbal (conversation level)</option>
            <option>Experiences Situational Mutism</option>
            <option>Other please describe below</option>
          </select>
        </label>
        <label>
          Can your child follow short verbal instructions?
          <select
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            onChange={(e) => (e.target.value)}
          >
            <option>Yes</option>
            <option>No</option>
            <option>Yes with Visual Supoprt</option>
          </select>
        </label>
        <label>
          Does your child use any visuals for support (timetables, social stories, routine charts, etc.)?
          <select
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            onChange={(e) => (e.target.value)}
          >
            <option>Yes - at home</option>
            <option>Yes - at school</option>
            <option>Yes - at home and school</option>
            <option>No</option>
          </select>
        </label>
        <label className="block text-sm font-medium text-gray-700 mt-4 col-span-2">
          (Please tick all that apply) My child can.....
          <textarea
            onChange={(e) => (e.target.value)}
            name="childName"
            className="mt-1 block w-full h-28 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </label>
        <label className="block text-sm font-medium text-gray-700 mt-4 col-span-2">
          Social Communication (Optional)
          <textarea
            onChange={(e) => (e.target.value)}
            name="childName"
            className="mt-1 block w-full h-28 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </label>

      </div>
      <ManagingEmotions />
      <SensorySkills />
      <AdditionalInfo />
    </div >
  )
}