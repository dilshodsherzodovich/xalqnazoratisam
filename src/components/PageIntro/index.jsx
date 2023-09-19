import { Link, useLocation } from "react-router-dom";

function PageIntro({ pageTitle = "", pageImage = "" }) {
  const { pathname } = useLocation();

  const renderPathname = (pathname) => {
    return (
      <div className="paths flex gap-2 items-center justify-center text-[14px] text-secondary fon-[500]">
        <Link className="hover:text-primary" to={"/"}></Link>
        <i className="fa-solid fa-angle-right"></i>
        <p className="capitalize">{pathname.slice(0, 1)}</p>
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
      <div className="overlay bg-overflowColor w-full h-full flex items-center justify-center">
        <p className="text-center text-white text-[30px] font-manrope">
          {pageTitle}
        </p>
        {renderPathname(pathname)}
      </div>
    </div>
  );
}

export default PageIntro;
