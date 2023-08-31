import { createSlice } from '@reduxjs/toolkit';

export const mainSlice = createSlice({
  name: 'main',
  initialState: {
    page: 'dashboard',
  },

  reducers: {
    setDashboardPage: (state, action) => {
      state.page = action.payload;
    },
  },
});

export const { setDashboardPage } = mainSlice.actions;

export default mainSlice.reducer;
