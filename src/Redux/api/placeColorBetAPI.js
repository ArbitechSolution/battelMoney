import axios from 'axios';

const baseURL = 'https://battlemoney-auth-api.nakshtech.info/';

const placeBetAPI = axios.create({
  baseURL,
});

export const placeBetColorBall = async (data, token) => {
  try {
    const response = await placeBetAPI.post('/placebetcolorball', data, {
      headers: {
        Authorization: token,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default placeBetAPI;
