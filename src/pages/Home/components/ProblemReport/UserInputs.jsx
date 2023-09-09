import React from "react";

function UserInputs() {
  return (
    <div className="user-inputs pt-5 w-[60%] mx-auto">
      <form>
        <label className="font-[600] text-[20px] leading-[30px]  text-[#11201D]">
          Muammoni tasvirlab bering
        </label>
        <textarea
          className="w-full border rounded-[10px] border-[#b2b7d040] mt-4 mb-10 bg-[#F8F9FA] p-[1.2rem] leading-[1.4rem] min-h-[20rem] outline-none resize-y"
          name="problem-detail"
          placeholder="Muammoning mohiyatini qisqacha tavsiflang. Masalan: bir hafta davomida kvartirada suv past bosimda, shirkat raisi munosabat bildirmaydi va mening shikoyatlarim bo‘yicha chora ko‘rmayapti"
        ></textarea>
        <label className="font-[600] text-[20px] leading-[30px]  text-[#11201D]">
          Rasm yuklang
        </label>
      </form>
    </div>
  );
}

export default UserInputs;
