import { call } from "redux-saga/effects";
import { spotifyFetcher } from "../helpers";

export const getStateToken = (state) => state.auth.token;

export function* fetchSongs(playlistId) {
  return yield call(() =>
    spotifyFetcher(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`)
  );
}
