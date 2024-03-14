import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ororganizationName: "",
  organizationId: null,
};

const organizationSlice = createSlice({
  name: "organization",
  initialState,
  reducers: {
    
  },
});

export const { loggedIn, logOut } = userSlice.actions;

export default userSlice.reducer