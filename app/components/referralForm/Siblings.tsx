import AddDynamicInputFields from "../addInputFields";

interface PersonalInfoProps {
  setParentName: (name: string) => void;
  setSiblings: (siblings: string) => void;
}

const siblings = [{ name: "Sibling 1", age: "Age" }];

export const SiblingInfo = ({}: PersonalInfoProps) => {
  return (
    <div className="mt-10">
      <AddDynamicInputFields />
    </div>
  );
};
