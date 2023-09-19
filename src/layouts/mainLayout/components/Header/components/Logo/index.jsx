import { ReactComponent as LogoIcon } from "@assets/logo.svg";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <div className="logo-box">
      <Link to={"/"}>
        <LogoIcon />
      </Link>
    </div>
  );
}

export default Logo;
