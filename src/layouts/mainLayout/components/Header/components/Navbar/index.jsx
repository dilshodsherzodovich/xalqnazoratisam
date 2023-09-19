import { Link } from "react-router-dom";

function Navbar() {
  const links = [
    {
      name: "Xarita",
      route: "/#map",
    },
    {
      name: "Loyiha haqida",
      route: "/#about-project",
    },
    {
      name: "Reytinglar",
      route: "/#grades",
    },
    {
      name: "Yangiliklar",
      route: "/yangiliklar",
    },
  ];

  const renderLinks = (links) => {
    return links.map((item, index) => {
      return (
        <Link
          key={index}
          to={item.route}
          className="text-secondary font-[500] leading-[60px] relative block transition-all duration-300 ease-in-out"
        >
          {item.name}
        </Link>
      );
    });
  };

  return <div className="navbar flex gap-10">{renderLinks(links)}</div>;
}

export default Navbar;
