import { useEffect } from "react";
import ProblemCategory from "./ProblemCategory";
import ProblemTypes from "./ProblemTypes";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProblemsList } from "../../../../redux/slices/problemCategorirs.slice";

function ChooseProblem() {
  const { allCategories } = useSelector((state) => state.problemCategories);
  const dispatch = useDispatch();

  useEffect(() => {
    if (allCategories.length > 0) return;
    dispatch(fetchAllProblemsList());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="choose-problem p-12 relative border-[3px] rounded-[30px] border-primary mt-[100px]">
      <ProblemCategory />
      <ProblemTypes />
    </div>
  );
}

export default ChooseProblem;
