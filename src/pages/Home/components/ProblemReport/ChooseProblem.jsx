import ProblemCategory from "./ProblemCategory";
import ProblemTypes from "./ProblemTypes";

function ChooseProblem() {
  return (
    <div className="choose-problem p-12 relative border-[3px] rounded-[30px] border-primary mt-[100px]">
      <ProblemCategory />
      <ProblemTypes />
    </div>
  );
}

export default ChooseProblem;
