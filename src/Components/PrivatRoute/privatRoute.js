import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import authSelectors from "../../redux/auth/auth-selectors.js";

export default function PrivateRoute({ children, ...routProps }) {
  const isLogin = useSelector(authSelectors.getIsLoggedIn);
  return <Route {...routProps}>{isLogin ? children : <Redirect to="/login" />}</Route>;
}
