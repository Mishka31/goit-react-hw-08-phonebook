import { Switch, Route } from "react-router-dom"; //NavLink
import { Suspense } from "react";
import App from "./App.js";
import { Registration } from "./login/components/registration.jsx";
import { Login } from "./login/components/login.jsx";
import home from "./Components/startPage/startPage.js";

export default function Routes() {
  return (
    <div>
      {/* <NavLink to="/login">Login </NavLink>
      <NavLink to="/Registration">Registration </NavLink>
      <NavLink to="/app">PHONEBOOK</NavLink> */}

      <Switch>
        <Suspense fallback={<p>Loading...</p>}>
          <Route exact path="/" component={home} />
          <Route path="/login" component={Login} />
          <Route path="/registration" component={Registration} />
          <Route path="/app" component={App} />
        </Suspense>
      </Switch>
    </div>
  );
}
