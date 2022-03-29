import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: undefined,
  },
  reducers: {
    getToken: () => {},
    setToken: (state, { payload }) => {
      state.token = payload;
    },
  },
});

export const { getToken, setToken } = authSlice.actions;

export default authSlice.reducer;
