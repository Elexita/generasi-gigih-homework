import React, { useEffect } from "react";
import Button from "../../../components/Button";
import { getReturnedParamsFromSpotifyAuth, loginClick } from "../Auth/auth.js";

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
  useEffect(() => {
    if (window.location.hash) {
      const { access_token, expires_in, token_type } =
        getReturnedParamsFromSpotifyAuth(window.location.hash);
      localStorage.clear();

      localStorage.setItem("accessToken", access_token);
      localStorage.setItem("tokenType", token_type);
      localStorage.setItem("expiresIn", expires_in);
    }
  });

  return (
    <div>
      <h1>Hello!</h1>
      <Button onClick={loginClick}>Login</Button>
    </div>
  );
};

export { LoginPage, callback, getReturnedParamsFromSpotifyAuth };
