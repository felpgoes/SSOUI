import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import LoadingIcon from '../components/atoms/LoadingIcon';
import { isAccessTokenValid, getUserData } from '../services/auth';

import { Creators as AuthActions } from '../store/ducks/auth';

function ProtectedRoute({ component: Component, isPrivate, roles, ...rest }) {
  const { loggedIn } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  if (!loggedIn && isPrivate && getUserData() && isAccessTokenValid()) {
    dispatch(AuthActions.signInByStorage(getUserData()));
    return <LoadingIcon />;
  }

  return (
    <Route
      {...rest}
      render={(props) =>
        loggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/novo/login',
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
}

export default ProtectedRoute;
