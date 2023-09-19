import Container from "@layouts/Container";
import MainSection from "../../components/MainSection";
import PageIntro from "../../components/PageIntro";
import newsBg from "@assets/images/samarqand.jpg";

function News() {
  return (
    <div className="news-page">
      <MainSection>
        <section className="intro-page">
          <PageIntro pageTitle="Yangiliklar" pageImage={newsBg} />
        </section>
        <div className="min-h-[500px]"></div>
      </MainSection>
    </div>
  );
}

export default News;
