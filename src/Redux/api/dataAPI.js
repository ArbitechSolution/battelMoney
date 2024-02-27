// dataAPI.js
import axios from 'axios';

const baseURL = 'https://battlemoney-match-api.nakshtech.info/';

const dataAPI = axios.create({
  baseURL,
});

export const fetchData = () => dataAPI.get('/data');

export default dataAPI;
