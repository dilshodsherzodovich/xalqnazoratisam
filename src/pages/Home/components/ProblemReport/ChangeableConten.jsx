import { useSelector } from "react-redux";
import ChooseProblem from "./ChooseProblem";
import DescribeProblem from "./DescribeProblem";
import Location from "./Location";

function ChangeableConten() {
  const { step } = useSelector((state) => state.reportStatus);

  return step === 0 ? (
    <ChooseProblem />
  ) : step === 1 ? (
    <DescribeProblem />
  ) : step === 2 ? (
    <Location />
  ) : null;
}

export default ChangeableConten;
