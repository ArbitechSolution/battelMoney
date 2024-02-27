// ipSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  ip: null,
  error: null,
};

export const fetchIP = createAsyncThunk('ip/fetchIP', async () => {
  try {
    const response = await axios.get(`https://api.ipify.org?format=json`);
    return response.data.ip;
  } catch (error) {
    throw error;
  }
});

export const ipSlice = createSlice({
  name: 'ip',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchIP.fulfilled, (state, action) => {
        state.ip = action.payload;
        state.error = null;
      })
      .addCase(fetchIP.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export const selectIP = (state) => state.ip.ip;

export default ipSlice.reducer;
