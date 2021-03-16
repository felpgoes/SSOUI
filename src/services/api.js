import axios from 'axios';

const { REACT_APP_BASEURL } = process.env;

export const OAuth = axios.create({
  baseURL: `${REACT_APP_BASEURL}`,
});
