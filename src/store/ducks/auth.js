import produce from 'immer';

export const Types = {
  SIGN_IN_BY_STORAGE: '@auth/SIGN_IN_BY_STORAGE',
  SIGN_OUT: '@auth/SIGN_OUT',
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
  user: {},
  token: {},
  loggedIn: false,
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case Types.SIGN_IN_REQUEST: {
        draft.loading = true;
        break;
      }
      case Types.SIGN_IN_BY_STORAGE: {
        break;
      }
      case Types.SIGN_OUT: {
        draft.loading = false;
        draft.loggedIn = false;
        draft.user = {};
        draft.token = {};
        break;
      }
      case Types.SIGN_IN_SUCCESS: {
        draft.loading = false;
        draft.loggedIn = true;
        draft.user = action.payload.userToken;
        draft.token = action.payload.accessToken;
        break;
      }
      case Types.SIGN_IN_ERROR: {
        draft.loading = false;
        draft.loggedIn = false;
        break;
      }
      case Types.SIGN_UP_REQUEST: {
        draft.loading = true;
        break;
      }
      case Types.SIGN_UP_SUCCESS: {
        draft.loading = false;
        break;
      }
      case Types.SIGN_UP_ERROR: {
        draft.loading = false;
        break;
      }
      case Types.FORGOT_PASSWORD_REQUEST: {
        draft.loading = true;
        break;
      }
      case Types.FORGOT_PASSWORD_SUCCESS: {
        draft.loading = false;
        break;
      }
      case Types.FORGOT_PASSWORD_ERROR: {
        draft.loading = false;
        break;
      }
      case Types.CHANGE_PASSWORD_REQUEST: {
        draft.loading = true;
        break;
      }
      case Types.CHANGE_PASSWORD_SUCCESS: {
        draft.loading = false;
        break;
      }
      case Types.CHANGE_PASSWORD_ERROR: {
        draft.loading = false;
        break;
      }
      default:
    }
  });
}

export const Creators = {
  signOut: () => ({
    type: Types.SIGN_OUT,
  }),
  signInByStorage: (params) => ({
    type: Types.SIGN_IN_BY_STORAGE,
    payload: { params },
  }),
  signInRequest: (params) => ({
    type: Types.SIGN_IN_REQUEST,
    payload: { params },
  }),
  signInSuccess: (accessToken, userToken) => ({
    type: Types.SIGN_IN_SUCCESS,
    payload: { accessToken, userToken },
  }),
  signInError: (error) => ({
    type: Types.SIGN_IN_ERROR,
    payload: { error },
  }),
  signUpRequest: (params) => ({
    type: Types.SIGN_UP_REQUEST,
    payload: { params },
  }),
  signUpSuccess: () => ({
    type: Types.SIGN_UP_SUCCESS,
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
