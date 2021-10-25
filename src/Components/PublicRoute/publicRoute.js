import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import authSelectors from "../../redux/auth/auth-selectors.js";

export default function PublicRoute({ children, restricted = false, ...routProps }) {
  const isLogin = useSelector(authSelectors.getIsLoggedIn);
  const shouldRedirect = isLogin && restricted;
  return <Route {...routProps}>{shouldRedirect ? <Redirect to="/" /> : children}</Route>;
}
