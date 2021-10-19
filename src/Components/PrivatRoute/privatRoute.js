import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import authSelectors from "../../redux/selectors/login-selector";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isLogin = useSelector(authSelectors.getIsLoggedIn);
  return (
    <Route
      {...rest}
      render={(props) => (isLogin ? <Component {...props} /> : <Redirect to="/registration" />)}
    />
  );
};

export default PrivateRoute;
