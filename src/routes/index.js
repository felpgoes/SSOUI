import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
// import { routes } from './routes';
import ProtectedRoute from './ProtectedRoute';
import SignIn from '../pages/SignIn';
import SingUp from '../pages/SignUp';
import ForgotPassword from '../pages/ForgotPassword';
import ChangePassword from '../pages/ChangePassword';
import Home from '../pages/Home';

const Routes = () => {
  return (
    <>
      <Switch>
        {/* {routes.map((r) => (
          <ProtectedRoute
            exact
            key={r.id}
            path={`${r.url}`}
            component={r.component}
            isPrivate={r.isPrivate}
          />
        ))} */}
        <Route exact path="/signup" component={SingUp} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/forgot-password" component={ForgotPassword} />
        <Route exact path="/change-password" component={ChangePassword} />
        <ProtectedRoute isPrivate exact path="/home" component={Home} />
        <Redirect from="/" to="/signin" />
      </Switch>
    </>
  );
};

export default Routes;
