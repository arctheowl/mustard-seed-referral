import { SetStateAction, JSX, Dispatch } from "react";
import AddDynamicInputFields from "../addInputFields";
interface PersonalInfoProps {
  setSiblings: Dispatch<SetStateAction<string>>
}

export const SiblingInfo = ({setSiblings}: PersonalInfoProps) => {
  return (
    <div className="mt-10">
      <AddDynamicInputFields setSiblings={setSiblings} />
    </div>
  );
};
