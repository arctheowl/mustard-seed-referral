import { SetStateAction, JSX, Dispatch } from "react";
import AddDynamicInputFields from "../addInputFields";
interface SiblingProps {
  setSiblings: Dispatch<SetStateAction<string>>
}

export const SiblingInfo = ({setSiblings}: SiblingProps) => {
  return (
    <div className="mt-10">
      <AddDynamicInputFields setSiblings={setSiblings} />
    </div>
  );
};
