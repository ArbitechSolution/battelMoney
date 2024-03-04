import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchLossProfit } from '../api/lossProfitAPI';

const initialState = {
  lossProfitData: null,
  isLoading: false,
  error: null,
};

export const fetchLossProfitData = createAsyncThunk(
  'lossProfit/fetchLossProfitData',
  async ({ uid, fromDate, toDate, token }, { rejectWithValue }) => {
    try {
      const data = await fetchLossProfit(uid, fromDate, toDate, token);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const lossProfitSlice = createSlice({
  name: 'lossProfit',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLossProfitData.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchLossProfitData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.lossProfitData = action.payload;
        state.error = null;
      })
      .addCase(fetchLossProfitData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default lossProfitSlice.reducer;
