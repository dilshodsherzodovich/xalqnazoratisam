import { useSelector } from "react-redux";
import ChooseProblem from "./ChooseProblem";
import DescribeProblem from "./DescribeProblem";

function ChangeableConten() {
  const { step } = useSelector((state) => state.reportStatus);

  return step === 0 ? (
    <ChooseProblem />
  ) : step === 1 ? (
    <DescribeProblem />
  ) : null;
}

export default ChangeableConten;
