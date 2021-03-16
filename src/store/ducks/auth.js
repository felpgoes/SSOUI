import produce from 'immer';

export const Types = {
  SIGN_IN_REQUEST: '@auth/SIGN_IN_REQUEST',
  SIGN_IN_SUCCESS: '@auth/SIGN_IN_SUCCESS',
  SIGN_IN_ERROR: '@auth/SIGN_IN_ERROR',
  SIGN_UP_REQUEST: '@auth/SIGN_UP_REQUEST',
  SIGN_UP_SUCCESS: '@auth/SIGN_UP_SUCCESS',
  SIGN_UP_ERROR: '@auth/SIGN_UP_ERROR',
  FORGOT_PASSWORD_REQUEST: '@auth/FORGOT_PASSWORD_REQUEST',
  FORGOT_PASSWORD_SUCCESS: '@auth/FORGOT_PASSWORD_SUCCESS',
  FORGOT_PASSWORD_ERROR: '@auth/FORGOT_PASSWORD_ERROR',
  CHANGE_PASSWORD_REQUEST: '@auth/CHANGE_PASSWORD_REQUEST',
  CHANGE_PASSWORD_SUCCESS: '@auth/CHANGE_PASSWORD_SUCCESS',
  CHANGE_PASSWORD_ERROR: '@auth/CHANGE_PASSWORD_ERROR',
};

const INITIAL_STATE = {
  loading: false,
  success: false,
  response: [],
  error: true,
};

export default function auth(state = INITIAL_STATE, action) {
  return (
    produce(state),
    (draft) => {
      switch (action.type) {
        case Types.SIGN_IN_REQUEST: {
          draft.loading = true;
          break;
        }
        default:
      }
    }
  );
}

export const Creators = {
  signInRequest: (params) => ({
    type: Types.SIGN_IN_REQUEST,
    payload: { params },
  }),
  signInSuccess: (token, usuario) => ({
    type: Types.SIGN_IN_SUCCESS,
    payload: { token, usuario },
  }),
  signInError: (error) => ({
    type: Types.SIGN_IN_ERROR,
    payload: { error },
  }),
  signUpRequest: (params) => ({
    type: Types.SIGN_UP_REQUEST,
    payload: { params },
  }),
  signUpSuccess: (token, usuario) => ({
    type: Types.SIGN_UP_SUCCESS,
    payload: { token, usuario },
  }),
  signUpError: (error) => ({
    type: Types.SIGN_UP_ERROR,
    payload: { error },
  }),
  forgotPasswordRequest: (params) => ({
    type: Types.FORGOT_PASSWORD_REQUEST,
    payload: { params },
  }),
  forgotPasswordSuccess: (token, usuario) => ({
    type: Types.FORGOT_PASSWORD_SUCCESS,
    payload: { token, usuario },
  }),
  forgotPasswordError: (error) => ({
    type: Types.FORGOT_PASSWORD_ERROR,
    payload: { error },
  }),
  changePasswordRequest: (params) => ({
    type: Types.CHANGE_PASSWORD_REQUEST,
    payload: { params },
  }),
  changePasswordSuccess: (token, usuario) => ({
    type: Types.CHANGE_PASSWORD_SUCCESS,
    payload: { token, usuario },
  }),
  changePasswordError: (error) => ({
    type: Types.CHANGE_PASSWORD_ERROR,
    payload: { error },
  }),
};
