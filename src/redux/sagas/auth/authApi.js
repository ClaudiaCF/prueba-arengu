import { call } from "redux-saga/effects";

export function fetchTokenApi() {
  let auth = window.btoa(
    `${process.env.REACT_APP_SPOTIFY_CLIENT_ID}:${process.env.REACT_APP_SPOTIFY_CLIENT_SECRET}`
  );
  const params = new URLSearchParams({
    grant_type: "client_credentials",
  }).toString();
  return call(() =>
    fetch("https://accounts.spotify.com/api/token?" + params, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Basic ${auth}`,
      },
      json: true,
    })
  );
}
