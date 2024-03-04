import axios from 'axios';

const baseURL = 'https://battlemoney-auth-api.nakshtech.info/';

const accountStatementAPI = axios.create({
  baseURL,
});

export const getAccountStatement = async (data, token) => {
  try {
    const response = await accountStatementAPI.post('/getAccount_Statement', data, {
      headers: {
        Authorization: token,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default accountStatementAPI;
