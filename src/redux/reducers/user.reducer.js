import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "u",
  initialState: {
    user: null,
    token: null,
  },
  reducers: {
    initUser: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    login: (state, action) => {
      localStorage.setItem("user", JSON.stringify(action.payload.user));
      sessionStorage.setItem("Authorization", action.payload.token);
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    logout: (state) => {
      localStorage.clear();
      sessionStorage.clear();
      state.user = null;
      state.token = null;
    },
  },
});

export const { login, initUser, logout } = userSlice.actions;

export default userSlice.reducer;
