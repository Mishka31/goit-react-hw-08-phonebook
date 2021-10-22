import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import authSelectors from "../../redux/auth/auth-selectors.js";

const PublicRoute = ({ component: Component, ...rest }) => {
  const isLogin = useSelector(authSelectors.getIsLoggedIn);
  return (
    <Route
      {...rest}
      render={(props) => (isLogin ? <Redirect to="/" /> : <Component {...props} />)}
    />
  );
};

export default PublicRoute;
