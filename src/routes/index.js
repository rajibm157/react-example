import { Switch, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import AuthRoute from "./AuthRoute";
import Links from "./routes";
import { Home, Signup, Login, Error } from "../pages";

export default function Routes() {
  return (
    <>
      {/* A <Switch> looks through its children <Route>s and
      renders the first one that matches the current URL. */}
      <Switch>
        <PrivateRoute exact path={Links.home} component={Home} />
        <AuthRoute exact path={Links.login} component={Login} />
        <AuthRoute exact path={Links.signup} component={Signup} />
        <Route path="*" component={Error} />
      </Switch>
    </>
  );
}
