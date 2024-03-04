// store.js
import { configureStore } from '@reduxjs/toolkit';
// import apiReducer from '../Slices/apiSlices';
import authReducer from '../Slices/authSlice';
import ipReducer from '../Slices/ipSlice';

import betHistoryReducer from "../Slices/betHistorySlice";
import walletLoginReducer from "../Slices/walletLoginSlice";
import accountStatementReducer from '../Slices/accountStatementSlice';
import lossProfitReducer from "../Slices/lossProfitSlice"
import updatePassReducer from "../Slices/updatePassSlice"
import placeColorBetReducer from '../Slices/placeColorBetSlice';

export const store = configureStore({
  reducer: {
    // api: apiReducer,
    auth: authReducer,
    ip: ipReducer,
    betHistory : betHistoryReducer,
    walletLogin : walletLoginReducer,
    accountStatement: accountStatementReducer,
    lossProfit: lossProfitReducer,
    updatePass: updatePassReducer,
    placeBet: placeColorBetReducer,
    
    // data: dataAPIRedcer
    // other reducers...
  },
});
