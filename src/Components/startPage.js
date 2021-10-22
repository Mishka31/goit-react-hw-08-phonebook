import { NavLink } from "react-router-dom";
import AppBar from "./AppBar/AppBar.js";
import s from "./start.module.css";

export default function startPage() {
  return (
    <div className={s.wellcomePage}>
      <AppBar />
      <h1>Wellcome to Phonebook.</h1>
      <p>
        Please try{" "}
        <NavLink to="/login" className={s.link}>
          Login
        </NavLink>
      </p>
    </div>
  );
}
