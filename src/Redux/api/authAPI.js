// authAPI.js
import axios from 'axios';

const baseURL = 'https://battlemoney-match-api.nakshtech.info/';

const authAPI = axios.create({
  baseURL,
});

export const login = (userData) => authAPI.post('/login', userData);

export default authAPI;
