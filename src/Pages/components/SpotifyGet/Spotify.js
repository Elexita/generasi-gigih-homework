const WEBSITE = "https://api.spotify.com/v1";

const getProfile = (accessToken) => {
  return fetch(WEBSITE + "/me", {
    headers: {
      Authorization: "Bearer " + accessToken,
    },
  }).then((res) => res.json());
};

const getSearchTrack = (accessToken, options) => {
  const params = new URLSearchParams(options).toString();
  return fetch(`${WEBSITE}/search?${params}`, {
    headers: {
      Authorization: "Bearer " + accessToken,
    },
  }).then((res) => res.json());
};

export { getSearchTrack, getProfile };
