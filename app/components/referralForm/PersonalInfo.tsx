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

export const PersonalInfo = ({ setName, setEmail, setSecondEmail, setAddress, setPhone, setSignposted }: PersonalInfoProps) => {
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
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          name="email"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </label>
      <label className="block text-sm font-medium text-gray-700 mt-4">
        Secondary Email Address
        <input
          onChange={(e) => setSecondEmail(e.target.value)}
          type="SecondEmail"
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
      <p className="mt-4">
        The majority of our groups and interventions take place in
        school hours, Mondays-Fridays, term time only. If you are not
        able to bring your child to sessions during these times we will
        not be able to offer face to face support but will signpost you
        to other services. Please confirm you would be able to bring
        your child to sessions at these times.
      </p>
      <CheckBox label="Confirmation" description="By clicking this box you confirm that you are free and available to attend all sessions " />
      <label className="block text-sm font-medium text-gray-700 mt-4">
        Signposted to Mustard Seed via......
        <select
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          name="signposted"
          onChange={(e) => setSignposted(e.target.value)}
        >
          <option>Paediatrician</option>
          <option>School</option>
          <option>Health professional</option>
          <option>Children's Services</option>
          <option>CAMHS</option>
          <option>Mustard Seed social media/website</option>
          <option>Word of mouth</option>
        </select>
      </label>
    </div>

  )
}