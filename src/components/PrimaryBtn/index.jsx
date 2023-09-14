function PrimaryBtn({ text, className, disabled, onClick }) {
  return (
    <button
      onClick={() => {
        onClick();
      }}
      disabled={disabled}
      className={`border transition border-[#5956e9] overflow-hidden bg-[#5956e9] text-white rounded-[20px] font-[500] py-[18px] px-[55px] h-auto text-center z-1 block hover:bg-[#2522ba], ${
        disabled ? "bg-secondary text-white opacity-20 border-secindary" : ""
      } ${className}`}
    >
      {text}
    </button>
  );
}

export default PrimaryBtn;
