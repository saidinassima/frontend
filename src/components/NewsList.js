import { News } from "./News";

export const NewsList = ({ newss, removeNews }) => {
  return newss.length ? (
    <ul className="news-list">
      {newss.map((news) => {
        return (
          <li key={news.id}>
            <News news={news} />
          </li>
        );
      })}
    </ul>
  ) : (
    <p>There are no news...</p>
  );
};
