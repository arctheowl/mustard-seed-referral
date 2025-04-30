import Divider from "./divider";

const consentOptions = [
  { id: 1, name: "Therapy intervention and evaluation", value: false },
  { id: 2, name: "Reports for funders and annual report", value: false },
  { id: 3, name: "In our termly newsletter for supporters", value: false },
  { id: 4, name: "On Mustard Seed's social media", value: false },
  { id: 5, name: "On Mustard Seed's website", value: false },
  { id: 6, name: "In our leaflet or other promotional material", value: false },
  { id: 7, name: "None of the above", value: false },
  { id: 8, name: "Consent to retain your information", value: false },
  { id: 9, name: "Consent to share your information", value: false },
  { id: 10, name: "I do not give consent", value: false },
];


interface ConsentInfoProps {
  setConsent: React.Dispatch<React.SetStateAction<string>>;
}

export const ConsentInfo = ({ setConsent }: ConsentInfoProps) => {


  const handleConsentChange = (index: number) => {
    const newConsent = [...consentOptions];
    newConsent[index].value = newConsent[index].value === true ? false : true;
    setConsent(JSON.stringify(newConsent));
  };

  return (
    <div className="">
      <Divider title={"Consent"} />
      <div className="gap-4 flex flex-col">
        <label>
          Please list specific difficulties you would like support for:
          <p className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none  sm:text-sm
          ">
            Mustard Seed Autism Trust would like your consent to retain your details on our secure database. This information is held confidentially and only staff who need to access it will be able to do so. By law we need to keep children's therapy records until they are 25 years old. Sometimes it is helpful to share information and reports with other professionals outside our organisation. Information is only shared with other professionals with your consent. Further information on our Privacy Policy can be found at the end of this form. If you would like to read the full policy please email  office@mustardseedautism.co.uk
          </p>

        </label>

        <div className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none  sm:text-sm
          ">
          <p>
            We only take photos or videos of sessions with your consent and the child's agreement. These are always used anonymously and you can opt out any time. Please indicate which of the following you give consent for:
          </p>
          {consentOptions.map((option, index) => (
            <div key={option.id} className="mt-1 md:grid md:grid-cols-2 md:w-full block w-full px-3 py-2 border-b-2 border-gray-300 focus:outline-none  sm:text-sm">
              <p className="">
                {option.name}
              </p>
              <input
                type="checkbox"
                required
                name={option.name}
                checked={consentOptions[index].value === true}
                onChange={() => handleConsentChange(index)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm
          "/>
            </div>
          ))}
        </div>
      </div>
    </div>

  )
}