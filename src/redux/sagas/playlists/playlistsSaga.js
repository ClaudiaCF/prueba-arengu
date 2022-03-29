import { put, takeEvery, all } from "redux-saga/effects";
import {
  getCurrentPlaylistSuccess,
  getPlaylistsSuccess,
  getPlaylistsFailure,
  getCurrentPlaylistFailure,
} from "../../reducers/playlistsSlice";
import { fetchPlaylists, fetchCurrentPlaylist } from "./playlistsApi";

function* getPlaylists() {
  const playlistsResponse = yield fetchPlaylists();
  if (playlistsResponse.status === 200) {
    const playlists = yield playlistsResponse.json();
    yield put(getPlaylistsSuccess(playlists.items));
  } else {
    yield put(getPlaylistsFailure("Couldn't fetch playlsits"));
  }
}

function* getCurrentPlaylist({ payload }) {
  const currentPlaylistResponse = yield fetchCurrentPlaylist(payload);
  if (currentPlaylistResponse.status === 200) {
    const currentPlaylist = yield currentPlaylistResponse.json();
    yield put(getCurrentPlaylistSuccess(currentPlaylist));
  } else {
    yield put(
      getCurrentPlaylistFailure("Couldn't fetch current playlist details")
    );
  }
}

function* playlistsSagaMethod() {
  yield takeEvery("playlists/getPlaylistsFetch", getPlaylists);
  yield takeEvery("playlists/getCurrentPlaylistFetch", getCurrentPlaylist);
}

export default function* playlistsSaga() {
  yield all([playlistsSagaMethod()]);
}
