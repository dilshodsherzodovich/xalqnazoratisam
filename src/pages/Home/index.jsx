import Intro from "./components/Intro.jsx";
import ProblemReport from "./components/ProblemReport.jsx";
function Home() {
  return (
    <div className="min-h-screen">
      <Intro />
      <section>
        <ProblemReport />
      </section>
    </div>
  );
}

export default Home;
