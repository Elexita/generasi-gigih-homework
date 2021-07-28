import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../Feature/user/user";
import tokenSlice from "../Feature/token/token";

export default configureStore({
  reducer: {
    user: userSlice,
    token: tokenSlice,
  },
});
