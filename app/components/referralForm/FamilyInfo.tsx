import { Dispatch, SetStateAction } from "react";
import Divider from "./divider";
import ParentNames from "./parentNames";
import { SiblingInfo } from "./Siblings";


interface PersonalInfoProps {
  setParentNames: Dispatch<SetStateAction<string>>
  setSiblings: Dispatch<SetStateAction<string>>
}

export const FamilyInfo = ({
  setParentNames,
  setSiblings,
}: PersonalInfoProps) => {
  return (
    <div className="">
      <Divider title={"Family Information"} />
      <ParentNames setParentNames={setParentNames} />
      <SiblingInfo setSiblings={setSiblings} />
    </div>
  );
};
