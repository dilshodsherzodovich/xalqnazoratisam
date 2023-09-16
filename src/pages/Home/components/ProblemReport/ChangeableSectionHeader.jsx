import GoBackBtn from "../../../../components/Gobackbtn";
import { clearImages } from "../../../../redux/slices/problemImages.slice";
import { gotToStep } from "../../../../redux/slices/reportStatus.slice";
import { useDispatch, useSelector } from "react-redux";

function ChangeableSectionHeader({ backStep }) {
  const dispatch = useDispatch();
  const { problem } = useSelector((state) => state.selectedProblem);
  const { activeCategoryTitle } = useSelector(
    (state) => state.problemCategories
  );

  return (
    <div className="mt-[-5.5rem] z-10 bg-white px-2 flex items-center border border-primary py-[12px] rounded-[12px]">
      <span
        onClick={() => {
          dispatch(gotToStep(backStep));
          if (backStep === 0) {
            dispatch(clearImages());
          }
        }}
      >
        <GoBackBtn />
      </span>
      <div className="route-box flex gap-3 items-center ml-12 text-[20px] font-[500]">
        <p>{activeCategoryTitle}</p>
        <i className="fa-solid fa-caret-right"></i>
        <p>{problem}</p>
      </div>
    </div>
  );
}

export default ChangeableSectionHeader;
