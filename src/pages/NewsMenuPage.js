import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const NewsMenuPage = () => {
  const { user } = useContext(AuthContext);

  return user ? (
    <section>
      <h2>News Menu:</h2>
      <ul>
        <li>
          <Link to={"/UserNews"}>UserNews</Link>
        </li>
        <li>
          <Link to={"/FilterNews"}>FilterNews</Link>
        </li>
        <li>
          <Link to={"/EditNew"}>EditNews</Link>
        </li>
      </ul>
    </section>
  ) : (
    <section>
      <h2>News Menu:</h2>
      <ul>
        <li>
          <Link to={"/UserNews"}>UserNews</Link>
        </li>
      </ul>
    </section>
  );
};
