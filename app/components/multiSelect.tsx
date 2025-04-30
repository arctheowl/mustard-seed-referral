import Select, { ActionMeta, MultiValue } from "react-select";

interface Options {
  value: string;
  label: string;
}

interface IMultiSelect {
  options: Options[];
  onChange: (newValue: MultiValue<Options>, actionMeta: ActionMeta<Options>) => void
  isMulti: boolean;
  name: string;
}

const MultiSelect = ({ options, name, onChange }: IMultiSelect) => {
  return (
    <Select
      onChange={onChange}
      isMulti
      name={name}
      options={options}
      className="basic-multi-select"
      classNamePrefix="select"
    />
  );
};

export default MultiSelect;
