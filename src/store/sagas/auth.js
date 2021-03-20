import React from 'react';
import { retry, put } from 'redux-saga/effects';

import { toast } from 'react-toastify';
import { Creators as AuthActions } from '../ducks/auth';
import history from '../../services/history';
import { OAuth } from '../../services/api';
import { persistData, excludeData } from '../../services/auth';
import { ErrorToast, SuccessToast } from '../../components/molecules/Toast';

export function* signIn(action) {
  try {
    const { params } = action.payload;

    const userLogin = {
      email: params.email,
      senha: params.password,
    };
    const response = yield retry(2, 2000, OAuth.post, '/autenticar', userLogin);

    const userData = {
      accessToken: response.data.data.accessToken,
      userToken: response.data.data.userToken,
      expiresIn: response.data.data.expiresIn,
    };
    toast.success(
      <SuccessToast size="30">Usuario logado com sucesso!</SuccessToast>
    );
    persistData(userData);
    yield put(
      AuthActions.signInSuccess(userData.accessToken, userData.userToken)
    );

    history.push('/home');
  } catch (error) {
    excludeData();
    yield put(AuthActions.signInError(error));
    toast.error(<ErrorToast size="30">Não foi possível logar.</ErrorToast>);
  }
}

export function* signInByStorage(action) {
  try {
    const { params } = action.payload;

    const userData = {
      accessToken: params.accessToken,
      userToken: params.userToken,
      expiresIn: params.expiresIn,
    };
    persistData(userData);
    yield put(
      AuthActions.signInSuccess(userData.accessToken, userData.userToken)
    );
    history.push('/home');
  } catch (error) {
    excludeData();
    history.push('/signin');
    yield put(AuthActions.signOut());
  }
}

export function* signUp(action) {
  try {
    const { params } = action.payload;

    const novoUsuario = {
      nome: params.name,
      email: params.email,
      senha: params.password,
      confirmarSenha: params.confirmPassword,
    };

    yield retry(2, 2000, OAuth.post, '/registrar', novoUsuario);

    yield put(AuthActions.signUpSuccess());
    toast.success(
      <SuccessToast size="30">Usuário cadastrado com sucesso.</SuccessToast>
    );
    history.push('/sign-in');
  } catch (error) {
    yield put(AuthActions.signUpError(error));
    toast.error(
      <ErrorToast size="30">Não foi possível registrar o usuário.</ErrorToast>
    );
  }
}

export function* forgotPassword(action) {
  try {
    const { params } = action.payload;

    yield retry(2, 2000, OAuth.post, '/recuperar-senha', '', {
      params: { email: params.email },
    });

    yield put(AuthActions.forgotPasswordSuccess());
    toast.success(
      <SuccessToast size="30">
        Requisição para alteração de senha enviada, confira sua caixa de
        mensagens.
      </SuccessToast>
    );
    history.push('/sign-in');
  } catch (error) {
    yield put(AuthActions.forgotPasswordError(error));
    toast.error(
      <ErrorToast size="30">
        Não foi possível realizar a requisição para alteração de senha.
      </ErrorToast>
    );
  }
}

export function* changePassword(action) {
  try {
    const { params } = action.payload;

    const bodyRequest = {
      token: params.token,
      email: params.email,
      senha: params.password,
    };

    yield retry(2, 2000, OAuth.post, '/alterar-senha', bodyRequest);

    yield put(AuthActions.changePasswordSuccess());
    toast.success(
      <SuccessToast size="30">Senha alterada com sucesso!</SuccessToast>
    );
    history.push('/sign-in');
  } catch (error) {
    yield put(AuthActions.changePasswordError(error));
    toast.error(
      <ErrorToast size="30">
        Não foi possível reaalizar a alteração da senha.
      </ErrorToast>
    );
  }
}
