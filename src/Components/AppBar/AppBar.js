import AuthNav from "../Navigation/navigations.js";
import { Link } from "react-router-dom";
import UserMenu from "../UserMenu/userMenu.js";
import { useSelector } from "react-redux";
import authSelectors from "../../redux/auth/auth-selectors.js";

import s from "./AppBar.module.css";
// import Contacts from "../../App.js";

export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  // const isRefreshingUser = useSelector(authSelectors.getIsRefreshing);
  return (
    <header className={s.container}>
      {isLoggedIn ? <UserMenu /> : <AuthNav />}

      <div className={s.link}>
        <Link to="/">Main Page</Link>
      </div>
    </header>
  );
}
