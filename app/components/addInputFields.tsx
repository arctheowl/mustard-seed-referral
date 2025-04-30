import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";

interface AddDynamicInputFieldsProps {
  setSiblings: Dispatch<SetStateAction<string>>;
}

export default function AddDynamicInputFields({ setSiblings }: AddDynamicInputFieldsProps) {
  const [inputs, setInputs] = useState([{ firstName: "", age: "" }]);

  const handleAddInput = () => {
    setInputs([...inputs, { firstName: "", age: "" }]);
  };

  const handleChange = (
    event: ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    let { name, value } = event.target;
    let onChangeValue = [...inputs];
    onChangeValue[index][name as keyof (typeof inputs)[0]] = value;
    setInputs(onChangeValue);
    setSiblings(JSON.stringify(onChangeValue));
  };

  const handleDeleteInput = (index: number) => {
    const newArray = [...inputs];
    newArray.splice(index, 1);
    setInputs(newArray);
    setSiblings(JSON.stringify(newArray));
  };

  return (
    <div className="container">
      {inputs.map((item, index) => (
        <div
          className="input_container md:grid-cols-12 md:grid md:gap-5 md:items-center block"
          key={index}
        >
          <h2 className="col-span-1 text-center">{index + 1}</h2>
          <div className="col-span-4">
            <label className=" block text-sm font-medium text-gray-700">
              Sibling Name
            </label>
            <input
              className="rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo"
              name="firstName"
              type="text"
              value={item.firstName}
              onChange={(event) => handleChange(event, index)}
            />
          </div>
          <div className="col-span-4">
            <label className="block text-sm font-medium text-gray-700">
              Sibling Age
            </label>
            <input
              aria-label="age"
              className="rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo"
              name="age"
              type="number"
              value={item.age}
              onChange={(event) => handleChange(event, index)}
            />
          </div>
          <div className="flex items-center justify-center">
            {inputs.length > 1 && (
              <button onClick={() => handleDeleteInput(index)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="size-6 hover:cursor-pointer hover:text-red-500"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </button>
            )}
            {index === inputs.length - 1 && (
              <button onClick={() => handleAddInput()}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 hover:cursor-pointer hover:text-green-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </button>
            )}
          </div>
        </div>
      ))}

      {/* <div className="body"> {JSON.stringify(inputs)} </div> */}
    </div>
  );
}
