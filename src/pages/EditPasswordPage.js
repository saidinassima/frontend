import { useContext, useState } from "react";
import { EditPasswordService } from "../services";
import { useLocalStorage } from "../hooks/useLocalStorage";

import { AuthContext } from "../context/AuthContext";

export const EditPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [newPass, setNewPass] = useState("");
  const [confirmNewPass, setConfirmNewPass] = useState("");
  const { token, setToken } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handleForm = async (e) => {
    e.preventDefault();
    try {
      const PassToken = await EditPasswordService({
        email,
        newPass,
        confirmNewPass,
        token,
      });
      setToken(PassToken);
      setMessage("Se ha Cambiando correctamente ");
    } catch (error) {
      setError(error.message);
      setMessage("");
    }
  };

  useLocalStorage(token);

  return (
    <section>
      <h1>Cambiar Contraseña</h1>
      <form onSubmit={handleForm}>
        <fieldset>
          <label htmlFor="email">Email</label>
          <input
            type="Email"
            id="email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="NewPass">NewPass</label>
          <input
            type="password"
            id="NewPass"
            name="NewPass"
            value={newPass}
            required
            onChange={(e) => setNewPass(e.target.value)}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="ConfirmNewPass">ConfirmNewPass</label>
          <input
            type="password"
            id="ConfirmNewPass"
            name="ConfirmNewPass"
            value={confirmNewPass}
            required
            onChange={(e) => setConfirmNewPass(e.target.value)}
          />
        </fieldset>

        <button
          onClick={() => {
            if (window.confirm("Are you sure?"));
          }}
        >
          cambiar contraseña
        </button>
        {error ? <p>{error}</p> : null}
        <p>{message}</p>
      </form>
    </section>
  );
};