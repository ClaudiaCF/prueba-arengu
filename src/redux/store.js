import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import playlistsReducer from "./reducers/playlistsSlice";
import authReducer from "./reducers/authSlice";
import songsReducer from "./reducers/songsSlice";

import rootSaga from "./sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    playlists: playlistsReducer,
    auth: authReducer,
    songs: songsReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;
