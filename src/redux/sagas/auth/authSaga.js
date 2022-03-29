import { put, takeEvery } from "redux-saga/effects";
import { setToken } from "../../reducers/authSlice";
import { fetchTokenApi } from "./authApi";

function* fetchToken() {
  const tokenResponse = yield fetchTokenApi();
  const token = yield tokenResponse.json();
  yield put(setToken(token.access_token));
}

function* authSaga() {
  yield takeEvery("auth/getToken", fetchToken);
}

export default authSaga;
