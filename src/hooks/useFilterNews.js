import { useEffect, useState } from "react";
import { getfilterThemeNewsService } from "../services";

const useFilterNews = (theme) => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadNews = async () => {
      try {
        setLoading(true);
        const data = await getfilterThemeNewsService(theme);

        setNews(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    loadNews();
  }, [theme]);

  const addNews = (data) => {
    setNews([data, ...news]);
  };

  return { news, error, loading, addNews };
};

export default useFilterNews;
