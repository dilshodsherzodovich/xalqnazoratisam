import InputMask from "react-input-mask";

//eslint disable no-nonoctal-decimal-escape
function TelMask({ value = null, className = "", setValue }) {
  return (
    <InputMask
      className={`w-full font-[900] 
         text-[#415674] py-3 px-5 border border-borderColor bg-grayBg rounded-md focus:outline-none  placeholder:font-[700]   ${className}`}
      // eslint-disable-next-line no-nonoctal-decimal-escape
      mask="+\9\98 99 999 99 99"
      placeholder="+998 90 123 45 67"
      name="phone"
      required
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
      }}
    />
  );
}

export default TelMask;
