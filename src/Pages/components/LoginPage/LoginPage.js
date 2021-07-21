import React, { useEffect } from "react";
import Button from "../../../components/Button";

//https://accounts.spotify.com/authorize?client_id=5fe01282e94241328a84e7c5cc169164&redirect_uri=http:%2F%2Fexample.com%2Fcallback&scope=user-read-private%20user-read-email&response_type=token&state=123
const CLIENT_ID = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
const SPOTIFY_AUTHO_ENDPOINT = "https://accounts.spotify.com/authorize";
const REDIRECT_URL = "http://localhost:3000/";
const SPACE_DELIMITER = "%20";
const SCOPES = ["playlist-modify-private"];
const SCOPES_URL_PARAM = SCOPES.join(SPACE_DELIMITER);

//http://localhost:3000/#access_token=BQDLHWz8do-_VEwHJfgfiE8ukbM3l2s2riwEcgEhngs05wbEkpeDAECjv8s2eykql3iazhSiJTOPeuCNNEzCRkxgYxTSgWZgMdTSQOdjdzusfGoddnm1KpJkCAyKUuyLnf5EjSW5qc1hYPJjtF8FUN5BVR4_NAjuLGjmknYDahZZ90luxrpba-oD31A10l9EksU&token_type=Bearer&expires_in=3600
const getReturnedParamsAuth = (hash) => {
  const stringAfterHashtag = hash.substring(1);
  const paramsInUrl = stringAfterHashtag.split("&");
  const paramsSplitUp = paramsInUrl.reduce((accumulator, currentValue) => {
    const [key, value] = currentValue.split("=");
    accumulator[key] = value;
    return accumulator;
  }, {});

  return paramsSplitUp;
};

const generateRandomString = (length) => {
  let result = "";
  let characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
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

const redirect = () => {
  const scope = "user-read-private playlist-modify-private user-read-email";
  const state = generateRandomString(16);
  let url = "https://accounts.spotify.com/authorize";
  url += "?response_type=token";
  url += `&client_id=${encodeURIComponent(CLIENT_ID)}`;
  url += `&scope=${encodeURIComponent(scope)}`;
  url += `&redirect_uri=${encodeURIComponent(REDIRECT_URL)}`;
  url += `&state=${encodeURIComponent(state)}`;
  window.location = url;
};

const LoginPage = () => {
  useEffect(() => {
    if (window.location.hash) {
      const { access_token, expires_in, token_type } = getReturnedParamsAuth(
        window.location.hash
      );
      localStorage.clear();

      localStorage.setItem("accessToken", access_token);
      localStorage.setItem("tokenType", token_type);
      localStorage.setItem("expiresIn", expires_in);
    }
  });

  const loginClick = () => {
    window.location = `${SPOTIFY_AUTHO_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL}&scope=${SCOPES_URL_PARAM}&response_type=token&showdialog=true`;
  };

  return (
    <div>
      <h1>Hello!</h1>
      <Button onClick={loginClick}>Login</Button>
    </div>
  );
};

export { LoginPage, getReturnedParamsAuth, redirect, callback };
