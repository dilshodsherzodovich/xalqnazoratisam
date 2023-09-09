import ChangeableSectionHeader from "./ChangeableSectionHeader";
import UserInputs from "./UserInputs";

function DescribeProblem() {
  return (
    <div className="describe-problem p-12 relative border-[3px] rounded-[30px] border-primary mt-[100px]">
      <ChangeableSectionHeader backStep={0} />
      <UserInputs />
    </div>
  );
}

export default DescribeProblem;
