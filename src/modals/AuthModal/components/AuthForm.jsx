import { useEffect, useState } from "react";
import TelMask from "../../../components/TelMask";
import PrimaryBtn from "@components/PrimaryBtn";
import { useDispatch } from "react-redux";
import { loginUser } from "../../../redux/slices/authLogin.slice";

function AuthForm({ closeModal }) {
  const [showPassword, setShowPassword] = useState(false);
  const [activeAuth, setActiveAuth] = useState("login");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    const formData = new FormData(e.target);
    const data = {
      username: formData.get("username").split(" ").join(""),
      password: formData.get("password"),
    };
    dispatch(loginUser(data));
  };

  return (
    <div className="bg-white px-20 py-12 rounded-xl shadow-2xl w-[700px] relative">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!phone || !password) return;
          handleSubmit(e);
        }}
        className="flex flex-col"
      >
        <p className="text-center text-[32px] text-[#313B6C] font-semibold">
          Kirish
        </p>
        <label className="mt-8 mb-2">Telefon</label>
        <TelMask value={phone} setValue={setPhone} />

        {activeAuth === "register" ? null : (
          <>
            <label className="mt-8 mb-2">Parol</label>
            <input
              placeholder="********"
              className="w-full font-[900] text-[#415674] py-3 px-5 border border-borderColor bg-grayBg rounded-md focus:outline-none  placeholder:font-[700]"
              type={showPassword ? "text" : "password"}
              name="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
            />
          </>
        )}
        <PrimaryBtn
          className="mt-8 mb-4 inline-block"
          type="submit"
          disabled={!phone || !password}
          text={activeAuth === "login" ? "Kirish" : "Ro'yxatdan o'tish"}
        />
      </form>

      <i
        onClick={closeModal}
        className="fa-solid fa-circle-xmark text-[40px] absolute top-4 right-4 cursor-pointer text-[#313B6C]"
      ></i>
    </div>
  );
}

export default AuthForm;
