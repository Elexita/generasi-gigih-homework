const CLIENT_ID = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
const SPOTIFY_AUTHO_ENDPOINT = "https://accounts.spotify.com/authorize";
const REDIRECT_URL = "http://localhost:3000/";
const SPACE_DELIMITER = "%20";
const SCOPES = ["user-read-private playlist-modify-private user-read-email"];
const SCOPES_URL_PARAM = SCOPES.join(SPACE_DELIMITER);

const getReturnedParamsFromSpotifyAuth = (hash) => {
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

//Search, profile API
const API_BASE = "https://api.spotify.com/v1";

const getProfile = (accessToken) => {
  return fetch(API_BASE + "/me", {
    headers: {
      Authorization: "Bearer " + accessToken,
    },
  }).then((res) => res.json());
};

const getSearchTrack = (accessToken, options) => {
  const params = new URLSearchParams(options).toString();
  return fetch(`${API_BASE}/search?${params}`, {
    headers: {
      Authorization: "Bearer " + accessToken,
    },
  }).then((res) => res.json());
};

export { getProfile, getSearchTrack };
export { getReturnedParamsFromSpotifyAuth, loginClick };
