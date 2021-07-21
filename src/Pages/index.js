import React, { useEffect, useState } from "react";
import { getProfile, getSearchTrack } from "./components/SpotifyGet/Spotify";
import Navbar from "../components/Navbar/index";
import data from "../data/SongData";
import SongCard from "../components/Card";
import { callback } from "./components/LoginPage/LoginPage";

const Index = () => {
  const [trackList, setTrackList] = useState(data);
  const [auth, setAuth] = useState(false);
  const [userData, setUserData] = useState({});
  useEffect(() => {
    const payload = callback();
    if (payload) {
      setAuth(payload);
      getProfile(payload.access_token).then((res) => {
        setUserData(res);
      });
    }
  }, []);
  const handleSearch = (query) => {
    const options = {
      q: query,
      type: "track",
      limit: 12,
    };
    getSearchTrack(auth.access_token, options).then((res) => {
      setTrackList(res.tracks.items);
    });
  };
  return (
    <>
      <Navbar userData={{ ...userData, ...auth }} handleSearch={handleSearch} />
      <SongCard data={trackList} />
    </>
  );
};

export default Index;
