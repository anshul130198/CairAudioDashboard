import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userEmail: "",
  userToken: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loggedIn: (state, action) => {
      state.userEmail = action.payload.email;
      state.userToken = action.payload.token;
    },
    logOut: (state, action) => {
      state.userEmail = "";
      state.userToken = "";
    },
  },
});

export const { loggedIn, logOut } = userSlice.actions;

export default userSlice.reducer