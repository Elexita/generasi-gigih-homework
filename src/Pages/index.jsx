import { useEffect, useState } from "react";
import NavBar from "../components/NavBar/index.jsx";
import Card from "../components/Card/index.jsx";
import initData from "../data/SongData";
import { getProfile, getSearchTrack} from "./components/Auth/auth.js";
import { callback} from "./components/LoginPage/LoginPage.js";

function Index() {
  const [trackList, setTrackList] = useState(initData);
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
      <NavBar userData={{ ...userData, ...auth }} handleSearch={handleSearch} />
      <Card data={trackList} />
    </>
  );
}

export default Index;
