import { createSlice, current } from "@reduxjs/toolkit";

export const playlistsSlice = createSlice({
  name: "playlists",
  initialState: {
    playlists: [],
    favoritePlaylists: [],
    currentPlaylist: {},
    isLoading: false,
    playlistsError: "",
    currentPlaylistError: "",
  },
  reducers: {
    getPlaylistsFetch: (state) => {
      state.isLoading = true;
    },
    getPlaylistsSuccess: (state, { payload }) => {
      state.playlists = payload;
      state.isLoading = false;
    },
    getPlaylistsFailure: (state, { payload }) => {
      state.isLoading = false;
      state.playlistsError = payload;
    },
    setFavoritePlaylist: (state, { payload }) => {
      state.favoritePlaylists.push(payload);
    },
    removeFavoritePlaylist: (state, { payload }) => {
      state.favoritePlaylists = state.favoritePlaylists.filter(
        (favPlaylist) => favPlaylist.id !== payload.id
      );
    },
    getCurrentPlaylistFetch: () => {},
    getCurrentPlaylistSuccess: (state, { payload }) => {
      state.currentPlaylist = payload;
    },
    getCurrentPlaylistFailure: (state, { payload }) => {
      state.currentPlaylistError = payload;
    },
  },
});

export const {
  getPlaylistsFetch,
  getPlaylistsSuccess,
  getPlaylistsFailure,
  setFavoritePlaylist,
  removeFavoritePlaylist,
  getCurrentPlaylistFetch,
  getCurrentPlaylistSuccess,
  getCurrentPlaylistFailure,
} = playlistsSlice.actions;

export default playlistsSlice.reducer;
