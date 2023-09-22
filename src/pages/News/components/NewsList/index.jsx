import { useSelector } from "react-redux/es/hooks/useSelector";
import NewsCard from "../NewsCard";

function NewsList() {
  const { news } = useSelector((state) => state.news);

  const renderNews = (news) => {
    return news.map((item) => {
      return <NewsCard key={item.id} {...item} />;
    });
  };

  return (
    <div className="news-list col-span-4 xl:col-span-2">
      <div className="grid grid-cols-6 gap-8">{renderNews(news)}</div>
    </div>
  );
}

export default NewsList;
