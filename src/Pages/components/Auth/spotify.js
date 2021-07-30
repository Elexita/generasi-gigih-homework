//Search, profile API
const WEB_API = "https://api.spotify.com/v1";

const getProfile = (accessToken) => {
  return fetch(WEB_API + "/me", {
    headers: {
      Authorization: "Bearer " + accessToken,
    },
  }).then((res) => res.json());
};

const getSearchSong = (accessToken, options) => {
  const params = new URLSearchParams(options).toString();
  return fetch(`${WEB_API}/search?${params}`, {
    headers: {
      Authorization: "Bearer " + accessToken,
    },
  }).then((res) => res.json());
};

const makePlaylist = async (accessToken, userID, payload) => {
  const result = await fetch(`${WEB_API}/users/${userID}/playlists`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + accessToken,
    },
    body: JSON.stringify(payload),
  });
  return await result.json();
};

const addSongToPlaylist = async (accessToken, playlistId, payload) => {
  const result = await fetch(`${WEB_API}/playlists/${playlistId}/tracks`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + accessToken,
    },
    body: JSON.stringify(payload),
  });
  return await result.json();
};

export { getProfile, getSearchSong, makePlaylist, addSongToPlaylist };
