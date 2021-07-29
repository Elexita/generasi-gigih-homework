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
    },
    setToken: (state, action) => {
      state.accesToken = action.payload;
      state.isAuth = true;
    },
  },
});

export const { login, setToken } = userSlice.actions;
export default userSlice.reducer;
