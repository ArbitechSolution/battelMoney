import axios from 'axios';

const baseURL = 'https://battlemoney-auth-api.nakshtech.info/';

const updatePassAPI = axios.create({
  baseURL,
});

export const updatePassword = async (data, token) => {
  try {
    const response = await updatePassAPI.post('/Update_pass', data, {
      headers: {
        Authorization: token,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default updatePassAPI;
