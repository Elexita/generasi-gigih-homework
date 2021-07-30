import React from "react";
import { Link } from "react-router-dom";
import Button from "../../../components/Button";
import "./style.module.css";
import { getProfile } from "../Auth/spotify";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setToken, setUserData } from "../../../Feature/user/user";
import { useHistory } from "react-router-dom";

const CLIENT_ID = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
const SPOTIFY_AUTHO_ENDPOINT = "https://accounts.spotify.com/authorize";
const REDIRECT_URL = "http://localhost:3000/";
const SPACE_DELIMITER = "%20";
const SCOPES = [
  "user-read-private",
  "playlist-modify-private",
  "user-read-email",
];
const SCOPES_URL_PARAM = SCOPES.join(SPACE_DELIMITER);

const getReturnedParamsFromSpotifyAuth = (hash) => {
  console.log("hash:", hash);
  const stringAfterHashtag = hash.substring(1);
  const paramsInUrl = stringAfterHashtag.split("&");
  const paramsSplit = paramsInUrl.reduce((accumulator, currentValue) => {
    const [key, value] = currentValue.split("=");
    accumulator[key] = value;
    return accumulator;
  }, {});
  return paramsSplit;
};

const loginClick = () => {
  window.location = `${SPOTIFY_AUTHO_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL}&scope=${SCOPES_URL_PARAM}&response_type=token&showdialog=true`;
};

const callback = () => {
  let hashParams = {};
  let e,
    r = /([^&;=]+)=?([^&;]*)/g,
    q = window.location.hash.substring(1);
  while ((e = r.exec(q))) {
    hashParams[e[1]] = decodeURIComponent(e[2]);
  }
  return hashParams.access_token && hashParams;
};

const LoginPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    const payload = getReturnedParamsFromSpotifyAuth(window.location.hash);
    if (payload.access_token) {
      // setAuth(payload);
      dispatch(setToken(payload.access_token));
      getProfile(payload.access_token).then((res) => {
        dispatch(setUserData(res));
        history.push("/landing-page");
      });
    }
  }, [dispatch, history]);

  return (
    <div>
      <h1>Hello!</h1>
      <Link to="/landing-page">
        <Button onClick={loginClick}>Login</Button>
      </Link>
    </div>
  );
};

export { LoginPage, callback, getReturnedParamsFromSpotifyAuth };
