import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCurrentPlaylistSongsFetch } from "../redux/reducers/songsSlice";
import { getCurrentPlaylistFetch } from "../redux/reducers/playlistsSlice";
import { Link, useParams } from "react-router-dom";
import "../styles.css";

function Songs() {
  const {id} = useParams()
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrentPlaylistSongsFetch(id));
    dispatch(getCurrentPlaylistFetch(id));
  }, [dispatch, id]);

  const { currentPlaylist, currentPlaylistError } = useSelector((state) => state.playlists);
  const { currentPlaylistSongs, isLoading } = useSelector((state) => state.songs);
  const songsError = useSelector((state) => state.songs.error);

  return (
    <div className="songs">
      <h1>Songs</h1>
      {currentPlaylist.name && <p className="subtitle">{currentPlaylist.name}'s tracks</p>}
      <Link className="link" to="/">Go back to your playlists</Link>
      <p className="loading">{isLoading && 'Loading...'}</p>
      <p className="current-playlist-error">{currentPlaylistError && `Error: ${currentPlaylistError}`}</p>
      <p className="songs-error">{songsError && `Error: ${songsError}`}</p>
      <div className="gallery">
        {currentPlaylistSongs.map(({track}) => (
          <div className="row" key={track.id}>
            <div className="column column-left">
              <img
                alt={track.name}
                className="song-img"
                src={track.album.images[2].url}
              />
            </div>
            <div className="column column-right">
              <h2>{track.name} - {track.artists[0].name}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Songs;
