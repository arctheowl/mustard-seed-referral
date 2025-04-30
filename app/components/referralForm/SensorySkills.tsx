import Divider from "./divider";

interface SensorySkillsProps {}

const areasOfDifficulty = [
  "Being touched/hugged/holding hands",
  "Wearing certain clothes, shoes, textures",
  "Understanding their own strength / rough play / breaks things",
  "Hair brushing / washing / cutting",
  "Self care - toileting/ teethbrushing/nail cutting/showering/bathing",
  "Limited diet - struggles with flavours/textures/colours/temperature of some foods",
  "Sensitivity to certain sounds/tones/pitches",
  "Sitting still / completing a task / attention difficulties",
  "Avoidant of everyday activities/routines",
  "None of the above",
];

const dailyLifeSkills = [
  "Bedtime routines",
  "Sleep (getting to sleep or staying asleep)",
  "Dressing",
  "Toileting",
  "Mealtimes",
  "Leaving the house / going out with family",
  "None of the above",
];

export const SensorySkills = ({}: SensorySkillsProps) => {
  return (
    <div className="">
      <Divider title={"Sensory, Motor and Life skills"} />
      <div className="grid grid-cols-2 gap-5">
        <label className="block text-sm font-medium text-gray-700">
          Please indicate any areas of difficulty
          <select className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
            {areasOfDifficulty.map((area) => (
              <option key={area}>{area}</option>
            ))}
          </select>
        </label>
        <label className="block text-sm font-medium text-gray-700">
          Any difficulties with daily life skills?
          <select className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
            {dailyLifeSkills.map((area) => (
              <option key={area}>{area}</option>
            ))}
          </select>
        </label>
      </div>
    </div>
  );
};
