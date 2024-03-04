import axios from 'axios';

const baseURL = 'https://battlemoney-auth-api.nakshtech.info/';

const betHistoryAPI = axios.create({
  baseURL,
});

export const fetchBetHistory = async (id, token) => {
  try {
    const response = await betHistoryAPI.get(`BetHistory?id=${id}`, {
      headers: {
        Authorization: token,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default betHistoryAPI;
