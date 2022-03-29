import { createSlice } from "@reduxjs/toolkit";

export const songsSlice = createSlice({
  name: "songs",
  initialState: {
    currentPlaylistSongs: [],
    isLoading: false,
    error: "",
  },
  reducers: {
    getCurrentPlaylistSongsFetch: (state) => {
      state.isLoading = true;
    },
    getCurrentPlaylistSongsSuccess: (state, { payload }) => {
      state.currentPlaylistSongs = payload;
      state.isLoading = false;
    },
    getCurrentPlaylistSongsFailure: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export const {
  getCurrentPlaylistSongsFetch,
  getCurrentPlaylistSongsSuccess,
  getCurrentPlaylistSongsFailure,
} = songsSlice.actions;

export default songsSlice.reducer;
