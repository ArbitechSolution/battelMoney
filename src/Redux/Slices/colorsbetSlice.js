import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import colorsbetAPI from '../api/colorsbetAPI';

const initialState = {
  betHistory: [],
  isLoading: false,
  error: null,
};

export const fetchBetHistory = createAsyncThunk(
  'colorsbet/fetchBetHistory',
  async (uid, { rejectWithValue }) => {
    try {
      const response = await colorsbetAPI.betHistory(uid);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const colorsbetSlice = createSlice({
  name: 'colorsbet',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBetHistory.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchBetHistory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.betHistory = action.payload;
        state.error = null;
      })
      .addCase(fetchBetHistory.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default colorsbetSlice.reducer;
