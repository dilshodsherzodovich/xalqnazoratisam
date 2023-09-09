import { useSelector, useDispatch } from "react-redux";
import { createSelector } from "reselect";
import { gotToStep } from "../../../../redux/slices/reportStatus.slice";
import { setProblem } from "../../../../redux/slices/selectedProblem.slice";

function ProblemTypes() {
  const selectedProblems = createSelector(
    (state) => state.problemCategories.activeCategoryId,
    (state) => state.problemTypes.allProblems,
    (activeCategoryId, allProblems) => {
      return allProblems.filter(
        (item) => item.mainCategoryId === activeCategoryId
      )[0].problems;
    }
  );
  const problems = useSelector(selectedProblems);
  const dispatch = useDispatch();

  const handleProblemClick = (index, problem) => {
    dispatch(gotToStep(index));
    dispatch(setProblem(problem));
  };

  const renderMiniCategories = (categoriesList) => {
    return categoriesList.map((item) => {
      return (
        <p
          key={item.id}
          className="leading-[30px] text-[14px] cursor-pointer  text-secondary hover:text-primary"
          onClick={() => {
            handleProblemClick(1, item.title);
          }}
        >
          {item.title}
        </p>
      );
    });
  };

  const renderProblems = (problemsList) => {
    return problemsList.map((item) => {
      return (
        <div key={item.id} className="col-span-1">
          <div className="flex flex-col">
            <p className=" font-[600] text-[20px] leading-[30px] mb-4 text-[#11201D] uppercase ">
              {item.categoryTitle}
            </p>
            {renderMiniCategories(item.miniCategories)}
          </div>
        </div>
      );
    });
  };

  return (
    <div className="problem-types grid grid-cols-4 gap-10 pt-5">
      {renderProblems(problems)}
    </div>
  );
}

export default ProblemTypes;
