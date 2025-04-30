interface CheckBoxProps {
  label: string;
  description: string;
}

export default function CheckBox({ label, description }: CheckBoxProps) {
  return (
    <fieldset className="group relative flex gap-24 rounded-md border border-gray-300 bg-white p-4 shadow-sm focus-within:ring-2 focus-within:ring-gray-900/10 focus-within:ring-offset-2 focus-within:ring-offset-gray-50 mt-10">
      <div className="text-sm/6">
        <label htmlFor="comments" className="font-medium text-gray-900">
          {label}
        </label>
        <p id="comments-description" className="text-gray-500 mt-4">
          The majority of our groups and interventions take place in school
          hours, Mondays-Fridays, term time only. If you are not able to bring
          your child to sessions during these times we will not be able to offer
          face to face support but will signpost you to other services. Please
          confirm you would be able to bring your child to sessions at these
          times.
          {description}
        </p>
      </div>
      <input
        required
        id="candidates"
        name="candidates"
        type="checkbox"
        aria-describedby="candidates-description"
        className=""
      />
      <svg
        fill="none"
        viewBox="0 0 14 14"
        className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
      >
        <path
          d="M3 8L6 11L11 3.5"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="opacity-0 group-has-checked:opacity-100"
        />
        <path
          d="M3 7H11"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="opacity-0 group-has-indeterminate:opacity-100"
        />
      </svg>
    </fieldset>
  );
}
