import { Link, useLocation } from "react-router-dom";

function PageIntro({ pageTitle = "", pageImage = "" }) {
  const { pathname } = useLocation();

  const renderPathname = (pathname) => {
    return (
      <div className="paths flex gap-2 items-center justify-center text-[14px] text-white fon-[500]">
        <Link className="hover:text-primary" to={"/"}>
          Bosh sahifa
        </Link>
        <i className="fa-solid fa-angle-right"></i>
        <p className="capitalize">{pathname.slice(1)}</p>
      </div>
    );
  };

  return (
    <div
      style={{
        background: `url(${pageImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="w-full h-[25rem]"
    >
      <div className="overlay bg-overflowColor w-full h-full flex flex-col items-center justify-center font-mono">
        {renderPathname(pathname)}
        <p className="text-center text-white text-[30px] font-mono">
          {pageTitle}
        </p>
      </div>
    </div>
  );
}

export default PageIntro;
