import { useSelector, useDispatch } from "react-redux";
import { createSelector } from "reselect";
import { gotToStep } from "../../../../redux/slices/reportStatus.slice";
import { setProblem } from "../../../../redux/slices/selectedProblem.slice";
import { useCookies } from "react-cookie";
import { setIsAuthOpen } from "../../../../redux/slices/modals.slice";
import { setProblemType } from "../../../../redux/slices/problemCreate.slice";
import ProblemLoader from "../../../../components/SkeletProblemTypeLoader";

function ProblemTypes() {
  const { loading } = useSelector((state) => state.problemCategories);
  const selectedProblems = createSelector(
    (state) => state.problemCategories.activeCategoryId,
    (state) => state.problemCategories.allCategories,
    (activeCategoryId, allCategories) => {
      if (allCategories && allCategories.length) {
        return allCategories.filter((item) => item.id === activeCategoryId)[0];
      } else {
        return {};
      }
    }
  );
  const [cookies] = useCookies(["access"]);
  const problems = useSelector(selectedProblems);
  const dispatch = useDispatch();

  const handleProblemClick = (index, problem) => {
    if (!cookies.access) {
      dispatch(setIsAuthOpen(true));
      return;
    }
    dispatch(gotToStep(index));
    dispatch(setProblem(problem.name));
    dispatch(setProblemType(problem));
  };

  const renderMiniCategories = (categoriesList) => {
    if (!categoriesList.length) {
      return (
        <p className="leading-[30px] text-[14px] text-secondary ">
          {"Ma'lumot topilmadi"}
        </p>
      );
    }

    return categoriesList.map((item) => {
      return (
        <p
          key={item.id}
          className="leading-[30px] text-[14px] cursor-pointer  text-secondary hover:text-primary"
          onClick={() => {
            handleProblemClick(1, { id: item.id, name: item.name });
          }}
        >
          {item.name}
        </p>
      );
    });
  };

  const renderProblems = (problemsList) => {
    if (loading) return <ProblemLoader />;

    if (!problemsList.length) {
      return (
        <p className="leading-[30px] text-[14px] text-secondary ">
          {"Ma'lumot topilmadi"}
        </p>
      );
    }

    return problemsList?.map((item) => {
      return (
        <div key={item.id} className="col-span-1">
          <div className="flex flex-col">
            <p className=" font-[600] text-[20px] leading-[30px] mb-4 text-[#11201D] uppercase ">
              {item?.name}
            </p>
            {renderMiniCategories(item?.asosiy_muammo_turi || [])}
          </div>
        </div>
      );
    });
  };

  return (
    <div className="problem-types grid grid-cols-4 gap-10 pt-5">
      {renderProblems(problems?.addres_muammo_turlari || [])}
    </div>
  );
}

export default ProblemTypes;
