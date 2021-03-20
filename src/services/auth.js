import { parseISO, isBefore, addSeconds } from 'date-fns';
import { getApplication } from '../application';

const application = getApplication();

export const USER_KEY = application.key;

export const getLocalObj = (key) => JSON.parse(sessionStorage.getItem(key));

// User OAuth
export const getUserData = () => getLocalObj(USER_KEY);

// Token
export const getTokenAccessToken = () => getLocalObj(USER_KEY).accessToken;
export const getTokenCreated = () => getLocalObj(USER_KEY).created;
export const getTokenExpirationDate = () => getLocalObj(USER_KEY).expiresIn;
export const getTokenAuthenticated = () => getLocalObj(USER_KEY).authenticated;
export const isAccessTokenValid = () =>
  isBefore(new Date(), addSeconds(new Date(), getTokenExpirationDate()));

export const persistData = (data) => {
  sessionStorage.setItem(USER_KEY, JSON.stringify(data));
};
export const excludeData = () => {
  sessionStorage.removeItem(USER_KEY);
};

export const setAuthorization = async (config) => {
  const token = getTokenAccessToken();

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
};
