import axios from 'axios';
import getToken from '../token';

const request = axios.create({
  baseURL: 'http://localhost:6869/api/'
});

request.interceptors.request.use(
  async config => {
    const token = await getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

export default request;
