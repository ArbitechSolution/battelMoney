// authSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { login } from '../api/authAPI';

const initialState = {
  user: null,
  error: null,
  isLoading: false,
};

// Define an asynchronous thunk for login
export const loginUser = createAsyncThunk('auth/loginUser', async ({ username, password, ipaddress }) => {
  try {
    const response = await login({ username, password, ipaddress });
    return response.data;
    
  } catch (error) {
    throw error;
  }
});

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default authSlice.reducer;
