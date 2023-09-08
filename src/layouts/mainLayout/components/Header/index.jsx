import { useEffect, useState } from "react";
import "./header.css";

import Logo from "./components/Logo";
import Navbar from "./components/Navbar";
import Container from "@layouts/Container";
import AuthBtn from "./components/AuthBtn";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

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

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <Container>
        <div className="flex justify-between items-center">
          <Logo />
          <div className="flex items-center gap-5">
            <Navbar />
          </div>
        </div>
      </Container>
    </header>
  );
}

export default Header;
