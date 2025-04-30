import MultiSelect from "../multiSelect";
import CheckBox from "./checkBox";
import Divider from "./divider";

interface PersonalInfoProps {
  setName: (name: string) => void;
  setEmail: (email: string) => void;
  setSecondEmail: (secondEmail: string) => void;
  setAddress: (address: string) => void;
  setPhone: (phone: string) => void;
  setSignposted: (signposted: string) => void;
}

export const PersonalInfo = ({
  setName,
  setEmail,
  setSecondEmail,
  setAddress,
  setPhone,
  setSignposted,
}: PersonalInfoProps) => {
  const handleSignpostedChange = (selectedOptions: any) => {
    const selectedValues = selectedOptions.map((option: any) => option.value);
    setSignposted(selectedValues.join(", "));
  };
  return (
    <div className="">
      <Divider title={"Personal Information"} />
      <label className="block text-sm font-medium text-gray-700">
        Full Name
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          name="name"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </label>
      <label className="block text-sm font-medium text-gray-700 mt-4">
        Email Address to Contact You
        <input
          required
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          name="email"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </label>
      <label className="block text-sm font-medium text-gray-700 mt-4">
        Secondary Email Address
        <input
          required
          onChange={(e) => setSecondEmail(e.target.value)}
          type="email"
          name="SecondEmail"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </label>
      <div className="grid grid-cols-2 gap-4 text-sm font-medium text-gray-700 mt-4">
        <label>
          Address
          <input
            onChange={(e) => setAddress(e.target.value)}
            type="text"
            name="address"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </label>
        <label>
          Telephone Number
          <input
            onChange={(e) => setPhone(e.target.value)}
            type="tel"
            name="phone"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </label>
      </div>

      <CheckBox
        label="Confirmation"
        description="By clicking this box you confirm that you are free and available to attend all sessions "
      />
      <label className="block text-sm font-medium text-gray-700 mt-4">
        Signposted to Mustard Seed via......
        <MultiSelect
          options={[
            { value: "Paediatrician", label: "Paediatrician" },
            { value: "School", label: "School" },
            { value: "Health professional", label: "Health professional" },
            { value: "Children's Services", label: "Children's Services" },
            { value: "CAMHS", label: "CAMHS" },
            {
              value: "Mustard Seed social media/website",
              label: "Mustard Seed social media/website",
            },
            { value: "Word of mouth", label: "Word of mouth" },
          ]}
          onChange={handleSignpostedChange}
          isMulti={false}
          name={""}
        />
      </label>
    </div>
  );
};
