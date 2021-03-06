import { Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Suspense, useEffect } from "react";
import Conacts from "./Components/Contacts/contacts.js";
import { Registration } from "./login/components/registration.jsx";
import { Login } from "./login/components/login.jsx";
import authOperations from "./redux/auth/auth-operations.js";
import authSelectors from "./redux/auth/auth-selectors.js";
import Home from "./Components/startPage.js";
import PrivateRoute from "./Components/PrivatRoute/privatRoute";
import PublicRoute from "./Components/PublicRoute/publicRoute";

// const HomePage = lazy(() => import("./views/HomePage" /* webpackChunkName: "home-page-view" */));

export default function Routes() {
  const dispatch = useDispatch();
  const isRefreshingUser = useSelector(authSelectors.getIsRefreshing);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    !isRefreshingUser && (
      <div>
        <Switch>
          <Suspense fallback={<p>Loading...</p>}>
            {/* <Route exact path="/" component={home} /> */}
            {/* <Route path="/login" component={Login} /> */}
            {/* <Route path="/registration" component={Registration} /> */}

            <PublicRoute exact path="/">
              <Home />
            </PublicRoute>

            <PublicRoute path="/login" restricted>
              <Login />
            </PublicRoute>

            <PublicRoute path="/registration" restricted>
              <Registration />
            </PublicRoute>

            <PrivateRoute path="/contacts">
              <Conacts />
            </PrivateRoute>
          </Suspense>
        </Switch>
      </div>
    )
  );
}
