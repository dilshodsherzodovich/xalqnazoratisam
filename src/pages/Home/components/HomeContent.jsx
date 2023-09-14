import Container from "@layouts/Container";

//import media files
import windowPic from "@assets/images/window.png";
import laptop from "@assets/images/laptop-poses.png";
import chat from "@assets/images/chat-group.png";
import PrimaryBtn from "../../../components/PrimaryBtn";

function HomeContent() {
  return (
    <Container>
      <div className="grid grid-cols-2 place-items-top gap-3">
        <div className="intro-text col-span-2 lg:col-span-1">
          <div className="lg:mt-[60px] text-center lg:text-start">
            <p className="text-[30px] md:text-[50px] 2xl:text-[70px] leading-[1.4] font-bold mb-[40px] tracking-[-0.45] text-[#313b6c] mx-auto">
              Samarqand viloyat xalq nazorati
            </p>
            <p className="text-[18px] w-[70%] mb-[40px] mx-auto lg:mx-0">
              Aholi va shahar xizmatlarining o`rtasida samarali hamkorlik qilish
              uchun interaktiv servis
            </p>
            <PrimaryBtn text={"Ro'yxatdan o'tish"} />
          </div>
        </div>
        <div className="col-span-2 lg:col-span-1">
          <div className="banner-thumbnail relative">
            <div className="animate__animated zoomIn animate-zoomIn z-[-1]">
              <div className="large-thumb">
                <img
                  className="w-[74%] max-w-full h-auto align-middle"
                  src={windowPic}
                  alt="Laptop"
                />
              </div>
            </div>
            <div className="animate__animated slideInRight animate-slideInRight z-[1000] translate-x-[25%]">
              <div className="large-thumb-2 text-right mt-[-210px] mr-[-50px]">
                <img
                  src={laptop}
                  alt="Laptop"
                  className="max-w-full h-auto align-middle"
                />
              </div>
            </div>
            <ul className="list-unstyled shape-group">
              <li className="shape shape-1 absolute top-[-25px] right-0">
                <div className="animate__animated slideInLeft animate-slideInLeft">
                  <img
                    src={chat}
                    alt="chat"
                    className="max-w-full h-auto align-middle"
                  />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default HomeContent;
