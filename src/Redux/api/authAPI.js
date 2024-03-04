// authAPI.js
import axios from 'axios';

const baseURL = 'https://battlemoney-auth-api.nakshtech.info/';

const authAPI = axios.create({
  baseURL,
});

export const login = (userData) => authAPI.post('/login', userData);

export default authAPI;
