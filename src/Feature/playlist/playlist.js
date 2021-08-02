import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  uris: [],
};

export const playlistSlice = createSlice({
  name: "playlist",
  initialState,
  reducers: {
    addSongs: (state, action) => {
      state.uris = action.payload;
    },
    removeSong: (state, action) => {
      state.uris = state.uris.filter((uri) => action.payload !== uri);
    },
    clearPlaylist: (state) => {
      state = initialState;
    },
  },
});

export const { addSongs, removeSong, clearPlaylist } = playlistSlice.actions;
export default playlistSlice.reducer;
