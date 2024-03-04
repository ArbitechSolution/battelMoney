import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { placeBetColorBall } from '../api/placeColorBetAPI';

const initialState = {
  isSuccess: false,
  isLoading: false,
  error: null,
};

export const placeBetColorBallData = createAsyncThunk(
  'placeBet/placeBetColorBallData',
  async (requestData, { rejectWithValue }) => {
    try {
      const response = await placeBetColorBall(requestData);
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const placeBetSlice = createSlice({
  name: 'placeBet',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(placeBetColorBallData.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(placeBetColorBallData.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.error = null;
      })
      .addCase(placeBetColorBallData.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.error = action.payload;
      });
  },
});

export default placeBetSlice.reducer;
