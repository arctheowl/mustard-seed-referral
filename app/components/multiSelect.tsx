import Select from "react-select";

interface Options {
  value: string;
  label: string;
}

interface IMultiSelect {
  options: Options[];
  onChange: (selectedOptions: Options[]) => void;
  isMulti: boolean;
  name: string;
}

const MultiSelect = ({ options, name }: IMultiSelect) => {
  const handleChange = (selectedOptions: any) => {
    console.log("Selected options:", selectedOptions);
  };

  return (
    <Select
      onChange={handleChange}
      isMulti
      name={name}
      options={options}
      className="basic-multi-select"
      classNamePrefix="select"
    />
  );
};

export default MultiSelect;
