import { ReactComponent as Logo } from "@assets/logo.svg";
import Container from "@layouts/Container";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="h-[14rem] overflow-hidden relative pt-[6rem] text-[15px] ">
      <Container>
        <div className="flex justify-between">
          <Logo />
          <div className="footer-nav-item flex flex-col gap-2">
            <p className="item-header text-[#313b6c] font-[600]">
              Xizmat haqida
            </p>
            <Link to={"#"}>Foydalanish shartlari</Link>
            <Link to={"#"}>Huquqiy hujjatlar</Link>
            <Link to={"#"}>So`rovni bajarishda xato topildi</Link>
          </div>
          <div className="footer-nav-item flex flex-col gap-2">
            <p className="item-header text-[#313b6c] font-[600]">
              Saytga tashrif buyuruvchilar uchun
            </p>
            <Link to={"#"}>Xabarni qanday qoldirish mumkin?</Link>
            <Link to={"#"}>Bu qanday ishlaydi?</Link>
          </div>
          <div className="footer-nav-item flex flex-col gap-2">
            <p className="item-header text-[#313b6c] font-[600]">
              Ijtimoiy tarmoqlar
            </p>
            <div className="socials flex gap-4 text-[20px]">
              <Link to={"#"}>
                <i className="fa-solid fa-paper-plane"></i>
              </Link>
              <Link to={"#"}>
                <i className="fa-brands fa-facebook-f"></i>
              </Link>
              <Link to={"#"}>
                <i className="fa-brands fa-instagram"></i>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
