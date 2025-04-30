import { useState, ChangeEvent } from "react";

const Strengths = ({}) => {
  const [inputs, setInputs] = useState([{ strengths: "" }]);

  const handleAddInput = () => {
    setInputs([...inputs, { strengths: "" }]);
  };

  const handleChange = (
    event: ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    let { name, value } = event.target;
    let onChangeValue = [...inputs];
    onChangeValue[index][name as keyof (typeof inputs)[0]] = value;
    setInputs(onChangeValue);
  };

  const handleDeleteInput = (index: number) => {
    const newArray = [...inputs];
    newArray.splice(index, 1);
    setInputs(newArray);
  };

  return (
    <div className="container">
      {inputs.map((item, index) => (
        <div
          className="input_container grid-cols-6 grid gap-5 items-center content-center"
          key={index}
        >
          <h2 className="col-span-1 text-center">{index + 1}</h2>
          <div className="col-span-4">
            <input
              className="rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo"
              name="strengths"
              type="text"
              value={item.strengths}
              onChange={(event) => handleChange(event, index)}
            />
          </div>

          <div className="flex items-center justify-center content-center">
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
};

export default Strengths;
