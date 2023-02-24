import { NavLink } from "react-router-dom";
import { useState } from "react";
import { getFilterThemeNewsService } from "../services";
import useFilterNews from "../hooks/useFilterNews";
import { NewsList } from "../components/NewsList";

export const FilterNewsPage = () => {
  const [theme, setTheme] = useState([]);
  const { news } = useFilterNews(theme);

  const handleForm = (e) => {
    e.preventDefault();
    getFilterThemeNewsService(theme);
  };

  return (
    <main>
      <h2>Lista mensajes filtrados por Tema</h2>
      <form onSubmit={handleForm}>
        <fieldset>
          <label htmlFor="NewTheme">Tema de la noticia a buscar?: </label>
          <input
            type="text"
            id="inputTheme"
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
          />
        </fieldset>
        <fieldset>
          <button type="submit">Mostrar</button>
        </fieldset>
      </form>
      <section>
        <h1>news</h1>
        <NewsList newss={news} />
      </section>
      <section>
        ir a la HomePage: <NavLink to={"/"}>HomePage</NavLink>
      </section>
    </main>
  );
};
