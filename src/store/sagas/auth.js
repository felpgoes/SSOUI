import React from 'react';
import { retry, put } from 'redux-saga/effects';

import { toast } from 'react-toastify';
import { Creators as AuthActions } from '../ducks/auth';
import history from '../../services/history';
import { OAuth } from '../../services/api';
import { persistData } from '../../services/auth';
import { ErrorToast, SuccessToast } from '../../components/molecules/Toast';

export function* signIn(action) {
  try {
    const { params } = action.payload;

    const userLogin = {
      email: params.email,
      password: params.password,
    };
    const response = yield retry(2, 2000, OAuth.post, `/sign-in`, userLogin);

    const userData = {
      token: response.data.token,
      user: response.data.user,
    };
    toast.success(<ErrorToast size="30">Não foi possível logar.</ErrorToast>);
    persistData(userData);
    yield put(AuthActions.signInSuccess(userData.token, userData.user));

    history.push('/home');
  } catch (error) {
    yield put(AuthActions.signInError(error));
    toast.error(<ErrorToast size="30">Não foi possível logar.</ErrorToast>);
  }
}

export function* signUp(action) {
  try {
    const { params } = action.payload;

    const novoUsuario = {
      name: params.name,
      email: params.email,
      password: params.password,
      emailConfirmation: false,
      twoFactorConfirmation: false,
      username: params.name,
      document: '',
      documentType: '',
    };

    yield retry(2, 2000, OAuth.post, '/users', novoUsuario);

    yield put(AuthActions.signUpSuccess(novoUsuario));
    toast.error(
      <SuccessToast size="30">Usuário cadastrado com sucesso.</SuccessToast>
    );
    history.push('/login');
  } catch (error) {
    yield put(AuthActions.signUpError(error));
    toast.error(
      <ErrorToast size="30">Não foi possível registrar o usuário.</ErrorToast>
    );
  }
}

export function forgotPassword(action) {}

export function changePassword(action) {}
