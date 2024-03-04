import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { loginWithWallet } from '../api/walletLoginAPI';

const initialState = {
  user: null,
  isLoading: false,
  error: null,
};

export const loginUserWithWallet = createAsyncThunk(
  'walletLogin/loginUserWithWallet',
  async (address, { rejectWithValue }) => {
    try {
      const data = await loginWithWallet(address);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const walletLoginSlice = createSlice({
  name: 'walletLogin',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUserWithWallet.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginUserWithWallet.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(loginUserWithWallet.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default walletLoginSlice.reducer;
