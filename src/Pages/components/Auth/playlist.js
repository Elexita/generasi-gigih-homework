import { useState } from "react";

const Playlist = () => {
  const [selectSong, setSelectSong] = useState([]);

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
      addSong(id);
    } else {
      removeSong(id);
    }
  };

  const createPlaylist = () => {
    console.log(selectSong);
  };

  return {
    selectSong,
    createPlaylist,
    addSong,
    removeSong,
    checkSelect,
    handleSelect,
  };
};

export { Playlist };
