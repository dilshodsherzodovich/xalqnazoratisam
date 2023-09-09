import problemsIcon from "../../../../assets/icons/problems.svg";
import usersIcon from "../../../../assets/icons/users.svg";
import Container from "../../../../layouts/Container";

function Stats() {
  const stats = [
    {
      title: "Ro'yxatdan o'tgan foydalanuvchilar",
      num: 22264,
      icon: usersIcon,
    },
    {
      title: "Umummiy hal qilingan muammolar",
      num: 35264,
      icon: problemsIcon,
    },
  ];

  const colors = ["#e4e6ec", "#dff6f5"];
  const textColors = ["#313B6C", "#1ABC9C"];

  const renderStats = () => {
    return stats.map((item, index) => {
      return (
        <div key={index} className="single-stat flex items-center gap-5">
          <div
            style={{ background: colors[index] }}
            className="w-[100px] h-[100px] rounded-full p-4 flex items-center justify-center"
          >
            <img src={item.icon} alt="" />
          </div>
          <div className="number flex flex-col w-[400px]">
            <p
              style={{ color: textColors[index] }}
              className="font-bold text-[3rem]"
            >
              {item.num}
            </p>
            <p
              style={{ color: textColors[index] }}
              className="font-bold text-[1.8rem]"
            >
              {item.title}
            </p>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="stats py-12 my-16 bg-[#f8f9fa]">
      <Container>
        <div className="stats-container flex w-fit mx-auto gap-10">
          {renderStats()}
        </div>
      </Container>
    </div>
  );
}

export default Stats;
