import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const Auth = () => {
  const { user, logout } = useContext(AuthContext);

  return user ? (
    <section>
      <button onClick={() => logout()}>Logout</button>
    </section>
  ) : (
    <ul>
      <li>
        <Link to={"/UserMenu"}>UserMenu</Link>
      </li>
      <li>
        <Link to={"/NewsMenu"}>NewsMenu</Link>
      </li>
    </ul>
  );
};
