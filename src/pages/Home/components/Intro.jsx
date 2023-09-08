import HomeContent from "./HomeContent";
import Shapes from "./Shapes";

function Intro() {
  return (
    <div className="home-intro min-h-[100vh] before:h-full before:w-full relative pt-[170px] lg:pt-[200px] 2xl:pt-[250px] overflow-x-hidden">
      <Shapes />
      <div>
        <HomeContent />
      </div>
    </div>
  );
}

export default Intro;
