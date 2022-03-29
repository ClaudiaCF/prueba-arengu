import { put, takeEvery, all } from "redux-saga/effects";
import {
  getCurrentPlaylistSongsSuccess,
  getCurrentPlaylistSongsFailure,
} from "../../reducers/songsSlice";
import { fetchSongs } from "./songsApi";

export const getStateToken = (state) => state.auth.token;

function* getSongs({ payload }) {
  const songsResponse = yield fetchSongs(payload);
  if (songsResponse.status === 200) {
    const songs = yield songsResponse.json();
    yield put(getCurrentPlaylistSongsSuccess(songs.items));
  } else {
    yield put(
      getCurrentPlaylistSongsFailure("Couldn't fetch current playlist's songs")
    );
  }
}

function* songsSagaMethod() {
  yield takeEvery("songs/getCurrentPlaylistSongsFetch", getSongs);
}

export default function* songsSaga() {
  yield all([songsSagaMethod()]);
}
