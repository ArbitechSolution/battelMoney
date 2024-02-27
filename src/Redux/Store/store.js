// store.js
import { configureStore } from '@reduxjs/toolkit';
// import apiReducer from '../Slices/apiSlices';
import authReducer from '../Slices/authSlice';
import ipReducer from '../Slices/ipSlice';
// import dataAPI from '../api/dataAPI';
// import dataAPIRedcer from "../Slices/dataSlice"

export const store = configureStore({
  reducer: {
    // api: apiReducer,
    auth: authReducer,
    ip: ipReducer,
    // data: dataAPIRedcer
    // other reducers...
  },
});
