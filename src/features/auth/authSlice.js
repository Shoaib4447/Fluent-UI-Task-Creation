import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: null,
  isAuthenticated: false,
};
const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload.username;
      state.token = action.payload.token;
      state.isAuthenticated = true;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
