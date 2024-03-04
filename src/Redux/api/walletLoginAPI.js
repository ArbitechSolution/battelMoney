import axios from 'axios';

const baseURL = 'https://battlemoney-auth-api.nakshtech.info/';

const walletLoginAPI = axios.create({
  baseURL,
});

export const loginWithWallet = async (address) => {
  try {
    const response = await walletLoginAPI.post('/login_WithWallet', { address });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default walletLoginAPI;
