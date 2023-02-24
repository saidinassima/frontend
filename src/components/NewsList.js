import { News } from "./News";

export const NewsList = ({
  newss,
  addLike,
  addDislike,
  removeLike,
  removeDislike,
  addNewPhoto,
}) => {
  return newss.length ? (
    <ul className="news-list">
      {newss.map((news) => {
        return (
          <li key={news.id}>
            <News
              news={news}
              addLike={addLike}
              addDislike={addDislike}
              removeLike={removeLike}
              removeDislike={removeDislike}
              addNewPhoto={addNewPhoto}
            />
          </li>
        );
      })}
    </ul>
  ) : (
    <p>There are no news...</p>
  );
};
