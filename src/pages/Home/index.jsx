import Intro from "./components/Intro.jsx";
import ProblemReport from "./components/ProblemReport";
import Stats from "./components/Stats/index.jsx";
function Home() {
  return (
    <div className="min-h-screen pb-10">
      <Intro />
      <section>
        <ProblemReport />
      </section>
      <section>
        <Stats />
      </section>
    </div>
  );
}

export default Home;
