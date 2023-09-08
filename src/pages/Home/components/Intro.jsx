import HomeContent from "./HomeContent";
import Shapes from "./Shapes";

function Intro() {
  return (
    <div className="home-intro min-h-[100vh] before:h-full before:w-full relative pt-[250px] overflow-x-hidden">
      <Shapes />
      <div>
        <HomeContent />
      </div>
    </div>
  );
}

export default Intro;
