import "./btn.css";
function GoBackBtn({ onClick = Function }) {
  return (
    <div className="goback-button flex w-[50px] h-[50px] border rounded-[25px] border-primary items-center justify-center cursor-pointer">
      <span className="arrow-left-icon">
        <i className="fa-solid fa-arrow-left text-primary"></i>
      </span>
    </div>
  );
}

export default GoBackBtn;
