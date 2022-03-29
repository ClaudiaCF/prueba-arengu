import { call } from "redux-saga/effects";
import { spotifyFetcher } from "../helpers";

export const getStateToken = (state) => state.auth.token;

export function* fetchPlaylists() {
  return yield call(() =>
    spotifyFetcher("https://api.spotify.com/v1/users/1195874440/playlists")
  );
}

export function* fetchCurrentPlaylist(playlistId) {
  return yield call(() =>
    spotifyFetcher(`https://api.spotify.com/v1/playlists/${playlistId}`)
  );
}
