import React, { useEffect } from "react";
import Button from "../../../components/Button";
import { getReturnedParamsFromSpotifyAuth, loginClick } from "../Auth/auth.js";
import { useDispatch, useSelector } from "react-redux";
import { getToken } from "../../../Feature/token/token";

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
  const dispatch = useDispatch();
  const Token = useSelector((state) => state.token.token);

  useEffect(() => {
    if (window.location.hash) {
      const access_token = getReturnedParamsFromSpotifyAuth(
        window.location.hash
      );
      dispatch(getToken(access_token));
    }
  }, []);

  useEffect(() => {
    if (Token !== "") {
      loginClick();
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
