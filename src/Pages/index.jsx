import { useEffect, useState } from "react";
import NavBar from "../components/NavBar/index.jsx";
import Card from "../components/Card/index.jsx";
import initData from "../data/SongData";
import { getProfile, getSearchSong} from "./components/Auth/spotify";
import { getReturnedParamsFromSpotifyAuth } from "./components/LoginPage/LoginPage.js";
import { useDispatch, useSelector} from "react-redux";
import { setToken } from "../Feature/user/user";

function Index() {
  const [trackList, setTrackList] = useState(initData);
  const [auth, setAuth] = useState(false);
  const [userData, setUserData] = useState({});

  const dispatch = useDispatch();
  useEffect(() => {

    const payload = getReturnedParamsFromSpotifyAuth(window.location.hash);
    if (payload.access_token) {
     // setAuth(payload);
     dispatch(setToken(payload.access_token));
      getProfile(payload.access_token)
      .then((res) => {
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
    getSearchSong(auth.access_token, options).then((res) => {
      setTrackList(res.tracks.items);
    });
  };

  return (
    <>
      <NavBar userData={{ ...userData, ...auth }} handleSearch={handleSearch} />
      <Card data={trackList} userData={{...userData, ...auth}} />
    </>
  );
}

export default Index;
