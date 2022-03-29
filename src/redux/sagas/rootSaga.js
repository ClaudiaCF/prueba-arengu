import { all } from "redux-saga/effects";
import authSaga from "./auth/authSaga";
import playlistsSaga from "./playlists/playlistsSaga";
import songsSaga from "./songs/songsSaga";

export default function* rootSaga() {
  yield all([playlistsSaga(), authSaga(), songsSaga()]);
}
