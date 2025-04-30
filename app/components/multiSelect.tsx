import Select from "react-select";

const options = [
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
];

const MultiSelect: React.FC = () => {
  const handleChange = (selectedOptions: any) => {
    console.log("Selected options:", selectedOptions);
  };

  return (
    <Select
      onChange={handleChange}
      isMulti
      name="colors"
      options={options}
      className="basic-multi-select"
      classNamePrefix="select"
    />
  );
};

export default MultiSelect;
