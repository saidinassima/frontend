import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { sendNewsService } from "../services";

export const NewNews = ({ addNews }) => {
  const { token } = useContext(AuthContext);
  const [setPhoto] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleForm = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const data = new FormData(e.target);
      const news = await sendNewsService({ data, token });

      addNews(news);

      e.target.reset();
      setPhoto(null);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <h1>Add new news</h1>
      <form className="new-news" onSubmit={handleForm}>
        <fieldset>
          <label htmlFor="title">titulo</label>
          <input type="text" name="title" id="title" required />
        </fieldset>

        <fieldset>
          <label htmlFor="leadIn">leadIn</label>
          <input type="text" name="leadIn" id="leadIn" required />
        </fieldset>

        <fieldset>
          <label htmlFor="text">Text</label>
          <input type="text" name="text" id="text" required />
        </fieldset>

        <fieldset>
          <label htmlFor="theme">tema</label>
          <input type="text" name="theme" id="theme" required />
        </fieldset>

        <button>Send news</button>
        {error ? <p>{error}</p> : null}
        {loading ? <p>posting news...</p> : null}
      </form>
    </>
  );
};
