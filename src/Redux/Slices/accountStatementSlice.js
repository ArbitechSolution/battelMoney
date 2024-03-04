import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getAccountStatement } from '../api/accountStatementAPI';

const initialState = {
  accountStatement: null,
  isLoading: false,
  error: null,
};

export const fetchAccountStatement = createAsyncThunk(
  'accountStatement/fetchAccountStatement',
  async ({ data, token }, { rejectWithValue }) => {
    try {
      const response = await getAccountStatement(data, token);
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const accountStatementSlice = createSlice({
  name: 'accountStatement',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAccountStatement.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchAccountStatement.fulfilled, (state, action) => {
        state.isLoading = false;
        state.accountStatement = action.payload;
        state.error = null;
      })
      .addCase(fetchAccountStatement.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default accountStatementSlice.reducer;
