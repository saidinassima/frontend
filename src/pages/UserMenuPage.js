import { Link } from "react-router-dom";

export const UserMenuPage = () => {
  return (
    <section>
      <h2>User Menu:</h2>
      <ul>
        <li>
          <Link to={"/login"}>Login</Link>
        </li>
        <li>
          <Link to={"/register"}>Register</Link>
        </li>
        <li>
          <Link to={"/delUser"}>Delete User</Link>
        </li>
        <li>
          <Link to={"/EditEmUsNam"}>Edit Email and UserName</Link>
        </li>
      </ul>
    </section>
  );
};
