import React from "react";

function Warning({ warningText }) {
  return (
    <div className="warning-block inline-flex px-6 py-4 text-[24px] rounded-md mt-6 items-center gap-8 text-[#FFA514] border border-[#FFEDD3] bg-[#FFF6E9]">
      <i className="fa-solid fa-circle-exclamation"></i>
      <p>{warningText}</p>
    </div>
  );
}

export default Warning;
