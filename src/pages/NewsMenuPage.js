import { Link } from "react-router-dom";

export const NewsMenuPage = () => {
  return (
    <section>
      <h2>News Menu:</h2>
      <ul>
        <li>
          <Link to={"/UserNews"}>UserNews</Link>
        </li>
        <li>
          <Link to={"/FilterNews"}>FilterNews</Link>
        </li>
      </ul>
    </section>
  );
};
