import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { deleteNewsService, disLikeService } from "../services";
import { LikeService } from "../services";
import { AnadirPhotoService } from "../services";
import { AuthContext } from "../context/AuthContext";
import useCounter from "../hooks/useCounter";

export const News = ({ news }) => {
  const navigate = useNavigate();
  const { token, user } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [photo, setPhoto] = useState(null);

  const deleteNews = async (id) => {
    try {
      await deleteNewsService({ id, token });
    } catch (error) {
      setError(error.message);
    }
  };

  const AnadirPhoto = async (id) => {
    try {
      await AnadirPhotoService({ id, photo, token });
    } catch (error) {
      setError(error.message);
    }
  };

  const Like = async (id) => {
    try {
      await LikeService({ id, token });
    } catch (error) {
      setError(error.message);
    }
  };

  const disLike = async (id) => {
    try {
      await disLikeService({ id, token });
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <ul>
      <li>
        <article className="news">
          <figure>
            {news.photo ? (
              <img
                src={`${process.env.REACT_APP_BACKEND}/static/photos/${news.photo}`}
                alt={news.photo}
              />
            ) : (
              "No hay foto"
            )}
          </figure>
          <p>Id: {news.id}</p>
          <p>Title: {news.title}</p>
          <p>leadIn: {news.leadIn}</p>
          <p>Text: {news.text}</p>
          <p>Theme: {news.theme}</p>
          <p>User: {news.idUser}</p>
          <p>Likes: {news.likes}</p>
          <button
            onClick={() => {
              Like(news.id);
            }}
          >
            👍
          </button>
          <button
            onClick={() => {
              disLike(news.id);
            }}
          >
            👎
          </button>
          {
            <section>
              <button
                onClick={() => {
                  if (window.confirm("Are you sure?")) deleteNews(news.id);
                }}
              >
                Delete news
              </button>
              <label htmlFor="photo">añadir photo</label>
              <input
                type="file"
                name="photo"
                id="photo"
                accept={"photo/*"}
                onChange={(e) => setPhoto(e.target.files[0])}
              />{" "}
              <button
                onClick={() => {
                  if (window.confirm("Are you sure?"))
                    AnadirPhoto(news.id, photo, token);
                }}
              >
                upload
              </button>
              {photo ? (
                <figure>
                  <img
                    src={URL.createObjectURL(photo)}
                    style={{ width: "100px" }}
                    alt="Preview"
                  />
                </figure>
              ) : null}
            </section>
          }
        </article>
      </li>
    </ul>
  );
};
