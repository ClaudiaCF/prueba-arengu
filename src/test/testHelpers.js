import React from "react";
import { mount } from "enzyme";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import playlistsReducer from "../redux/reducers/playlistsSlice";
import authReducer from "../redux/reducers/authSlice";
import songsReducer from "../redux/reducers/songsSlice";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export function renderComponent(
  component,
  { initialState = {}, ...mountOptions } = {}
) {
  const store = configureStore({
    reducer: {
      playlists: playlistsReducer,
      auth: authReducer,
      songs: songsReducer,
    },
    preloadedState: initialState,
  });

  return mount(
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={component} />
        </Routes>
      </BrowserRouter>
    </Provider>,
    mountOptions
  );
}
