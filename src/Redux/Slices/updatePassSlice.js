import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { updatePassword } from '../api/updatePassAPI';


const initialState = {
  isSuccess: false,
  isLoading: false,
  error: null,
};

export const updatePasswordData = createAsyncThunk(
  'updatePass/updatePasswordData',
  async ({ uid, oldPassword, newPassword, token }, { rejectWithValue }) => {
    try {
      const data = {
        uid,
        old_password: oldPassword,
        new_password: newPassword,
      };
      const response = await updatePassword(data, token);
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const updatePassSlice = createSlice({
  name: 'updatePass',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(updatePasswordData.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updatePasswordData.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.error = null;
      })
      .addCase(updatePasswordData.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.error = action.payload;
      });
  },
});

export default updatePassSlice.reducer;
