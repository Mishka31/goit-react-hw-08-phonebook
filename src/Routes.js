import { Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Suspense, useEffect } from "react";
import App from "./App.js";
import { Registration } from "./login/components/registration.jsx";
import { Login } from "./login/components/login.jsx";
import home from "./Components/startPage.js";
import authOperations from "./redux/auth/auth-operations.js";
// import PrivateRoute from "./Components/PrivatRoute/privatRoute";
// import PublicRoute from "./Components/PublicRoute/publicRoute";

export default function Routes() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <div>
      <Switch>
        <Suspense fallback={<p>Loading...</p>}>
          <Route exact path="/" component={home} />
          <Route path="/login" component={Login} />
          <Route path="/registration" component={Registration} />
          <Route exatc path="/contacts" component={App} />
          {/* <Route path="/app" component={App} /> */}
        </Suspense>
      </Switch>
    </div>
  );
}
