import axios from 'axios';

// const { REACT_APP_BASEURL } = process.env;

export const OAuth = axios.create({
  baseURL: `https://sso-api-frety.herokuapp.com/`,
});
