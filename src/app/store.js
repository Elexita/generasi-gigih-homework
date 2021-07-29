import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Feature/user/user";

export default configureStore({
  reducer: {
    user: userReducer,
  },
});
