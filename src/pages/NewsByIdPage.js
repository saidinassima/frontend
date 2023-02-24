import { NavLink } from "react-router-dom";
import { useState, useContext } from "react";
import { getSingleNewsService } from "../services";
import { AuthContext } from "../context/AuthContext";
import useNew from "../hooks/useNew";
import { News } from "../components/News";

export const NewsByIdPage = () => {
  const [idNews, setIdNews] = useState([]);
  const { token, setToken } = useContext(AuthContext);
  const { news, error, loading } = useNew(idNews);

  const handleForm = (e) => {
    e.preventDefault();
    getSingleNewsService(idNews);
  };

  return (
    <main>
      <h2>Lista mensajes por id de mensaje</h2>
      <form onSubmit={handleForm}>
        <fieldset>
          <label htmlFor="NewId">id de Noticia a Buscar?: </label>
          <input
            type="text"
            id="inputId"
            value={idNews}
            onChange={(e) => setIdNews(e.target.value)}
          />
        </fieldset>
        <fieldset>
          <button type="submit">Mostrar</button>
        </fieldset>
      </form>
      <section>
        <h1>news</h1>
        <News news={news} />
      </section>
      <section>
        ir a la HomePage: <NavLink to={"/"}>HomePage</NavLink>
      </section>
    </main>
  );
};
