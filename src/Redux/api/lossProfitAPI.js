import axios from 'axios';

const baseURL = 'https://battlemoney-auth-api.nakshtech.info/';

const lossProfitAPI = axios.create({
  baseURL,
});

export const fetchLossProfit = async (uid, fromDate, toDate, token) => {
  try {
    const response = await lossProfitAPI.get(`/Loss_Profit?uid=${uid}&fromdate=${fromDate}&toDate=${toDate}`, {
      headers: {
        Authorization: token,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default lossProfitAPI;
