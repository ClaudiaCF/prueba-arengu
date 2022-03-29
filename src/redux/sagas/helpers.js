import { put, take, select } from "redux-saga/effects";
import { getToken } from "../reducers/authSlice";

export const getStateToken = (state) => state.auth.token;

function* getTokenLogic() {
  let stateToken = yield select(getStateToken);
  if (!stateToken) {
    yield put(getToken());
    yield take("auth/setToken");
    stateToken = yield select(getStateToken);
  }
  return stateToken;
}

export function* spotifyFetcher(url) {
  const token = yield getTokenLogic();
  return yield fetch(url, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
}
