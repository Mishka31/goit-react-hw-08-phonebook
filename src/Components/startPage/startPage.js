// import { useSelector } from "react-redux";
import { NavLink, Link } from "react-router-dom";
// import authSelectors from "../../redux/auth/auth-selectors";
// import Homepage from "../Homepage/Homepage";
import s from "./start.module.css";

export default function startPage() {
  //   const isLogin = useSelector(authSelectors.getIsLoggedIn);
  //   if (isLogin) return <Homepage />;

  return (
    <div className={s.wellcomePage}>
      <div>
        <Link to="/login">login</Link>{" "}
        <Link to="/registration">Registration</Link>
      </div>
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
