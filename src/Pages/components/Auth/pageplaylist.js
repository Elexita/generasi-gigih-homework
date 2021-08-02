import { useState } from "react";
import { makePlaylist as makePlaylistAPI, addSongToPlaylist } from "./spotify";
import { useDispatch, useSelector } from "react-redux";
import {
  addSongs,
  removeSong,
  clearPlaylist,
} from "../../../Feature/playlist/playlist";

export default function PagePlaylist() {
  const selectedSongs = useSelector((state) => state.playlist.uris);
  const [isLoading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const checkSelect = (id) => {
    return selectedSongs.includes(id);
  };

  const handleSelect = (id) => {
    const isSelect = checkSelect(id);
    if (!isSelect) {
      dispatch(addSongs(id));
    } else {
      dispatch(removeSong(id));
    }
  };

  const makePlaylist = (token, userID, payload) => {
    setLoading(true);
    return makePlaylistAPI(token, userID, payload).then((res) => {
      const { id: playlist_id } = res;
      return addSongToPlaylist(token, playlist_id, {
        uris: selectedSongs,
      }).then(() => {
        dispatch(clearPlaylist());
        setLoading(false);
      });
    });
  };

  return {
    selectedSongs,
    makePlaylist,
    addSongs,
    removeSong,
    checkSelect,
    handleSelect,
    isLoading,
  };
}
