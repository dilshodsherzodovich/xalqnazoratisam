import UserInputsImages from "./UserInputsImages";
import PrimaryBtn from "@components/PrimaryBtn";
import Warning from "../../../../components/Gobackbtn/Warning";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { gotToStep } from "../../../../redux/slices/reportStatus.slice";
import { setDescription } from "../../../../redux/slices/problemCreate.slice";

function UserInputs() {
  const [disabled, setDisabled] = useState(true);
  const contentRef = useRef();
  const dispatch = useDispatch();
  return (
    <div className="user-inputs pt-5 md:w-[90%] lg:w-[80%] xl:w-[60%] mx-auto">
      <form>
        <label className="font-[600] text-[20px] leading-[30px]  text-[#11201D]">
          Muammoni tasvirlab bering
        </label>
        <textarea
          onChange={(e) => {
            if (!e.target.value) setDisabled(true);
            else setDisabled(false);
          }}
          ref={contentRef}
          className="w-full border rounded-[10px] border-[#b2b7d040] mt-4 mb-10 bg-[#F8F9FA] p-[1.2rem] leading-[1.4rem] min-h-[20rem] outline-none resize-y"
          name="description"
          placeholder="Muammoning mohiyatini qisqacha tavsiflang. Masalan: bir hafta davomida kvartirada suv past bosimda, shirkat raisi munosabat bildirmaydi va mening shikoyatlarim bo‘yicha chora ko‘rmayapti"
        ></textarea>
        <div>
          <label className="font-[600] text-[20px] leading-[30px]  text-[#11201D]">
            Rasm yuklang
          </label>
          <UserInputsImages />
          <Warning warningText={"Fayl hajmi 20MB dan oshmasligi kerak"} />

          <PrimaryBtn
            onClick={() => {
              dispatch(gotToStep(2));
              dispatch(setDescription(contentRef.current.value));
            }}
            text={"Keyingi bosqichga o'tish"}
            type={"submit"}
            className={"mt-4"}
            disabled={disabled}
          />
        </div>
      </form>
    </div>
  );
}

export default UserInputs;
