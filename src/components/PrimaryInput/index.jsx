function PrimaryInput({
  id,
  isDefault,
  value,
  name,
  type,
  placeHolder,
  disabled,
  required,
}) {
  return (
    <input
      id={id || ""}
      type={type || "text"}
      value={value}
      placeholder={placeHolder || ""}
      disabled={disabled || isDefault || false}
      name={name || ""}
      required={required || false}
      className={`bg-[#F8F9FA] border border-[#b2b7d040] px-6 py-4 rounded-lg text-[#11201D] mb-8 ${
        isDefault ? "bg-[#E6E9EF]" : ""
      }  ${disabled ? "opacity-50" : ""}`}
    />
  );
}

export default PrimaryInput;
