import lineImg from "@assets/images/line.png";
import classNames from "classnames";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { gotToStep } from "../../../../redux/slices/reportStatus.slice";

function ReportStatus() {
  const { statuses } = useSelector((state) => state.reportStatus);
  const dispatch = useDispatch();

  const renderStatuses = (statuses) => {
    return statuses.map((item, index) => {
      const numClassName = classNames(
        "number-box w-[50px] h-[50px] rounded-full flex items-center justify-center text-[#C1C5D9] border-2 text-[22px] font-extrabold border-[#9196AF]",
        {
          "active bg-primary border-primary text-white":
            item.status === "active" || item.status === "done",
        }
      );

      const titleClassname = classNames(
        "font-bold text-[18px] leading-5 whitespace-nowrap ",
        {
          "text-[#9196AF]": item.status === "undone",
        }
      );

      return (
        <React.Fragment key={index}>
          <div
            key={index}
            className={`single-status cursor-pointer flex gap-3 items-center`}
            onClick={() => {
              if (item.status === "done") {
                dispatch(gotToStep(index));
              }
            }}
          >
            <div className={numClassName}>
              {item.status === "done" ? (
                <i className="fa-solid fa-check"></i>
              ) : (
                <p>{index + 1}</p>
              )}
            </div>
            <p className={titleClassname}>{item.title}</p>
          </div>
          {index !== 2 ? (
            <div
              style={{
                background: `url(${lineImg}) repeat-x`,
              }}
              className="inline-block w-[7rem] h-[1px] mx-2"
            ></div>
          ) : null}
        </React.Fragment>
      );
    });
  };

  return (
    <div className="statuses-container flex items-center justify-between lg:w-[90%] mx-auto">
      {renderStatuses(statuses)}
    </div>
  );
}

export default ReportStatus;
