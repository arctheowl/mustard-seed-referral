import MultiSelect from "../multiSelect";
import Divider from "./divider";

interface SensorySkillsProps {
  setAreasOfDifficulty: (value: string) => void;
  setDailySkills: (value: string) => void;
}

const dailyLifeSkills = [
  "Bedtime routines",
  "Sleep (getting to sleep or staying asleep)",
  "Dressing",
  "Toileting",
  "Mealtimes",
  "Leaving the house / going out with family",
  "None of the above",
];

export const SensorySkills = ({ setAreasOfDifficulty, setDailySkills }: SensorySkillsProps) => {

  const handleAreasChange = (selectedOptions: any) => {
    const selectedValues = selectedOptions.map((option: any) => option.value);
    setAreasOfDifficulty(selectedValues.join(", "));
  };

  const handleDailySkillsChange = (selectedOptions: any) => {
    const selectedValues = selectedOptions.map((option: any) => option.value);
    setDailySkills(selectedValues.join(", "));
  };

  return (
    <div className="">
      <Divider title={"Sensory, Motor and Life skills"} />
      <div className="grid grid-cols-2 gap-5">
        <label className="block text-sm font-medium text-gray-700 col-span-2">
          Please indicate any areas of difficulty
          <MultiSelect
            options={[
              { value: "Being touched/hugged/holding hands", label: "Being touched/hugged/holding hands" },
              { value: "Wearing certain clothes, shoes, textures", label: "Wearing certain clothes, shoes, textures" },
              { value: "Understanding their own strength / rough play / breaks things", label: "Understanding their own strength / rough play / breaks things" },
              { value: "Hair brushing / washing / cutting", label: "Hair brushing / washing / cutting" },
              { value: "Self care - toileting/ teethbrushing/nail cutting/showering/bathing", label: "Self care - toileting/ teethbrushing/nail cutting/showering/bathing" },
              { value: "Limited diet - struggles with flavours/textures/colours/temperature of some foods", label: "Limited diet - struggles with flavours/textures/colours/temperature of some foods" },
              { value: "Sensitivity to certain sounds/tones/pitches", label: "Sensitivity to certain sounds/tones/pitches" },
              { value: "Sitting still / completing a task / attention difficulties", label: "Sitting still / completing a task / attention difficulties" },
              { value: "Avoidant of everyday activities/routines", label: "Avoidant of everyday activities/routines" },
              { value: "None of the above", label: "None of the above" },
            ]}
            onChange={handleAreasChange}
            isMulti={true}
            name={"areasOfDifficulty"}
          />
          {/* <select className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            onChange={(e) => setAreasOfDifficulty(e.target.value)}>
            <option value="" disabled selected>Select your option</option>
            {areasOfDifficulty.map((area) => (
              <option key={area} value={area}>{area}</option>
            ))}
          </select> */}
        </label>
        <label className="block text-sm font-medium text-gray-700 col-span-2">
          Any difficulties with daily life skills?
          <MultiSelect
            options={dailyLifeSkills.map((skill) => ({ value: skill, label: skill }))}
            onChange={handleDailySkillsChange}
            isMulti={true}
            name={"dailyLifeSkills"}
          />
          {/* <select className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            onChange={(e) => setDailySkills(e.target.value)}>
            <option value="" disabled selected>Select your option</option>
            {dailyLifeSkills.map((area) => (
              <option key={area} value={area}>{area}</option>
            ))}
          </select> */}
        </label>
      </div>
    </div>
  );
};
