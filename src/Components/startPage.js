import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import AppBar from "./AppBar/AppBar.js";
import authSelectors from "../redux/auth/auth-selectors.js";
import s from "./start.module.css";
// import orange from "./orange.png";

export default function startPage() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const name = useSelector(authSelectors.getUserName);
  return (
    <div className={s.wellcomePage}>
      <AppBar />
      <div className={s.container}></div>
      <h2 className={s.homeTitle}>
        {name ? `${name}, wellcome to your Phonebook! ✔` : "Wellcome to Phonebook."}{" "}
      </h2>
      {name ? (
        <p className={s.title}>
          Open your book contacts: <br />
          <br />
          <NavLink to="/contacts" className={s.link}>
            <button className={s.button}> Phonebook</button>
          </NavLink>
        </p>
      ) : (
        <p className={s.title}>
          Please try{" "}
          <NavLink to="/login" className={s.link}>
            Login
          </NavLink>
        </p>
      )}
    </div>
  );
}
