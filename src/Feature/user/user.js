import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  isAuth: false,
  accesToken: "",
  uri: "",
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
    setUserData: (state, action) => {
      state.user = action.payload;
    },
    setDataUri: (state, action) => {
      state.uri = action.payload;
    },
  },
});

export const { login, setToken, setUserData, setDataUri } = userSlice.actions;
export default userSlice.reducer;
