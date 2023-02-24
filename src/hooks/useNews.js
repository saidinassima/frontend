import { useEffect, useState } from "react";
import { getAllNewsService } from "../services";

const useNews = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadNews = async () => {
      try {
        setLoading(true);
        const data = await getAllNewsService();

        setNews(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    loadNews();
  }, []);

  const NewNews = (data) => {
    setNews([data, ...news]);
  };

  const removeNews = (id) => {
    setNews(news.filter((news) => news.id !== id));
  };

  return { news, error, loading, NewNews, removeNews };
};

export default useNews;
