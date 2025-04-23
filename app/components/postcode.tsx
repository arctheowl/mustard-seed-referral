import { ChangeEvent, FC, useState } from "react";
import { usePostalCodeValidation} from "postal-code-checker";

interface PostalCodeValidatorProps {
  isValidPostCode: boolean | null;
  setIsValidPostCode: (isValidPostCode: boolean | null) => void;
}

const PostalCodeValidator = ({isValidPostCode, setIsValidPostCode}: PostalCodeValidatorProps) => {
  const { validatePostalCode } = usePostalCodeValidation();
  const selectedCountry = "GB"
  const [postalCode, setPostalCode] = useState<string>("");
  const handlePostalCodeChange = (e: ChangeEvent<HTMLInputElement>) => {
    const code = e.target.value.toUpperCase();
    setPostalCode(code);
    if (selectedCountry) {
      // console.log(selectedCountry.countryCode)
      setIsValidPostCode(validatePostalCode(selectedCountry, code));
    }
  };

  return (
    <div className="text-black">
      <label className="text-sm font-medium text-gray-900 col-span-3" htmlFor="postalCode">
        Postal Code:
      </label>
      <div className="grid grid-cols-12">
        <input required className="uppercase border border-slate-400 rounded col-span-8 outline-1" type="text" value={postalCode} onChange={handlePostalCodeChange} placeholder="Enter postal code"
        />
        {isValidPostCode !== null && <p>{isValidPostCode ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 stroke-green-600 col-span-2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
          : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 stroke-red-600 col-span-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
        }</p>}
      </div>

    </div>
  );
};

export default PostalCodeValidator;