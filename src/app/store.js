import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Feature/user/user";
import playlistReducer from "../Feature/playlist/playlist";

export default configureStore({
  reducer: {
    user: userReducer,
    playlist: playlistReducer,
  },
});
