import "../App.css";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import useNews from "../hooks/useNews";
import { NewNews } from "../components/NewNews";
import { HomePage } from "./HomePage";

export const RegistedPage = () => {
  const { newNews } = useNews();
  const navigate = useNavigate();
  const { token, setToken } = useContext(AuthContext);

  if (!token) {
    navigate("/");
  }
  return (
    <main>
      <h2> bienvenida estas logeado </h2>
      <NewNews NewNews={newNews} />
      <HomePage />

      <form id="BotonBar">
        <fieldset>
          <button onClick={() => setToken("")}>Logout</button>
        </fieldset>
      </form>
    </main>
  );
};
