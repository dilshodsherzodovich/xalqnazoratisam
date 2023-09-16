import { useEffect, useState } from "react";
import "./header.css";

import Logo from "./components/Logo";
import Navbar from "./components/Navbar";
import Container from "@layouts/Container";
import AuthModal from "../../../../modals/AuthModal";
import PrimaryBtn from "@components/PrimaryBtn";
import { useDispatch, useSelector } from "react-redux";
import { setIsAuthOpen } from "../../../../redux/slices/modals.slice";
import { useCookies } from "react-cookie";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { isAuthOpen } = useSelector((state) => state.modals);
  const [cookies, setCookie, removeCookie] = useCookies(["access"]);
  const dispatch = useDispatch();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeModal = () => {
    dispatch(setIsAuthOpen(false));
  };

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <Container>
        <div className="flex justify-between items-center">
          <Logo />
          <div className="flex items-center gap-5">
            <Navbar />
            <PrimaryBtn
              text={cookies.access ? "Admin" : "Kirish"}
              onClick={() => {
                if (cookies.access) return;
                dispatch(setIsAuthOpen(true));
              }}
              className="px-12 py-[0.8rem]"
            />
            {cookies.access ? (
              <i
                onClick={() => {
                  removeCookie("access", {
                    path: "/",
                  });
                  removeCookie("refresh", {
                    path: "/",
                  });
                }}
                className="fa-solid fa-right-from-bracket text-[20px] cursor-pointer"
              ></i>
            ) : null}
          </div>
          <AuthModal isAuthOpen={isAuthOpen} closeModal={closeModal} />
        </div>
      </Container>
    </header>
  );
}

export default Header;
