// // apiSlice.js
// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// // Define the initial state for the API request
// const initialState = {
//   data: [],
//   loading: false,
//   error: null,
// };

// // Define the async thunk to fetch data from the API
// export const fetchData = createAsyncThunk('api/fetchData', async () => {
//   try {
//     const response = await axios.get('https://battlemoney-match-api.nakshtech.info/');
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// });

// // Define the API slice
// const apiSlice = createSlice({
//   name: 'api',
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchData.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(fetchData.fulfilled, (state, action) => {
//         state.loading = false;
//         state.data = action.payload;
//       })
//       .addCase(fetchData.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error.message;
//       });
//   },
// });

// export default apiSlice.reducer;

