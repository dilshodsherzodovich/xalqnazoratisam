import Container from "@layouts/Container";
import MainSection from "../../components/MainSection";
import PageIntro from "../../components/PageIntro";
import newsBg from "@assets/images/samarqand.jpg";
import NewsList from "./components/NewsList";
import NewsSidebar from "./components/NewsSidebar";

function News() {
  return (
    <div className="news-page pb-40">
      <MainSection>
        <section className="intro-page">
          <PageIntro pageTitle="Yangiliklar" pageImage={newsBg} />
        </section>
        <Container>
          <div className="min-h-[500px] news-content grid grid-cols-3 gap-10 lg:gap-16 mt-40">
            <NewsList />
            <NewsSidebar />
          </div>
        </Container>
      </MainSection>
    </div>
  );
}

export default News;
