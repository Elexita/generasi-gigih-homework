import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  isAuth: false,
  accesToken: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuth = action.payload;
      state.accesToken = action.payload;
    },
  },
});

export const { login } = userSlice.actions;
export default userSlice.reducer;
