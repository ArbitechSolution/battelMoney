import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchBetHistory } from '../api/betHistoryAPI';

const initialState = {
  betHistory: null,
  isLoading: false,
  error: null,
};

export const fetchBetHistoryData = createAsyncThunk(
  'betHistory/fetchBetHistoryData',
  async ({ id, token }, { rejectWithValue }) => {
    try {
      const data = await fetchBetHistory(id, token);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const betHistorySlice = createSlice({
  name: 'betHistory',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBetHistoryData.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchBetHistoryData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.betHistory = action.payload;
        state.error = null;
      })
      .addCase(fetchBetHistoryData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default betHistorySlice.reducer;
