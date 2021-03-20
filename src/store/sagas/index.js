import { all, takeLatest } from 'redux-saga/effects';

import {
  signIn,
  changePassword,
  forgotPassword,
  signUp,
  signInByStorage,
} from './auth';
import { Types as AuthTypes } from '../ducks/auth';

export default function* rootSaga() {
  yield all([
    takeLatest(AuthTypes.SIGN_IN_REQUEST, signIn),
    takeLatest(AuthTypes.CHANGE_PASSWORD_REQUEST, changePassword),
    takeLatest(AuthTypes.FORGOT_PASSWORD_REQUEST, forgotPassword),
    takeLatest(AuthTypes.SIGN_UP_REQUEST, signUp),
    takeLatest(AuthTypes.SIGN_IN_BY_STORAGE, signInByStorage),
  ]);
}
