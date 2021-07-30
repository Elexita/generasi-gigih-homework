import { useState } from "react";
import { makePlaylist as makePlaylistAPI, addSongToPlaylist } from "./spotify";

const PagePlaylist = () => {
  const [selectSong, setSelectSong] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const addTracks = (id) => {
    setSelectSong([...selectSong, id]);
  };

  const addSong = (id) => {
    setSelectSong([...selectSong, id]);
  };

  const removeSong = (id) => {
    const temp = [...selectSong];
    const index = temp.indexOf(id);
    if (index !== 1) {
      temp.splice(index, 1);
      setSelectSong(temp);
    }
  };

  const checkSelect = (id) => {
    return selectSong.includes(id);
  };

  const handleSelect = (id) => {
    const isSelect = checkSelect(id);
    if (!isSelect) {
      addTracks(id);
    } else {
      removeSong(id);
    }
  };

  const createPlaylist = (token, userId, payload) => {
    setLoading(true);

    return makePlaylistAPI(token, userId, payload).then((res) => {
      const { id: playlist_id } = res;

      return addSongToPlaylist(token, playlist_id, {
        uris: selectSong,
      }).then(() => {
        setSelectSong([]);
        setLoading(false);
      });
    });
  };

  return {
    selectSong,
    createPlaylist,
    addSong,
    removeSong,
    checkSelect,
    handleSelect,
    isLoading,
  };
};

export { PagePlaylist };
