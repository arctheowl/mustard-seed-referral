import { Dispatch, SetStateAction } from "react";
import Divider from "./divider";
import ParentNames from "./parentNames";
import { SiblingInfo } from "./Siblings";


interface PersonalInfoProps {
  setParentName: (name: string) => void;
  setSiblings: Dispatch<SetStateAction<string>>
}

const siblings = [{ name: "Sibling 1", age: "Age" }];

export const FamilyInfo = ({
  setParentName,
  setSiblings,
}: PersonalInfoProps) => {
  return (
    <div className="">
      <Divider title={"Family Information"} />
      <ParentNames />
      <SiblingInfo setSiblings={setSiblings} />
    </div>
  );
};
