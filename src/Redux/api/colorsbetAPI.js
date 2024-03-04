import axios from 'axios';

const baseURL = 'https://battlemoney-match-api.nakshtech.info/';

const colorsbetAPI = axios.create({
  baseURL,
});

export const betHistory = (uid) => colorsbetAPI.post('getColorbetHistory', uid);

export default colorsbetAPI ;