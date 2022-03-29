import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPlaylistsFetch } from "../redux/reducers/playlistsSlice";
import PlaylistCard from "../components/PlaylistCard.jsx";
import "../styles.css";
import { Link } from "react-router-dom";

function Playlists() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPlaylistsFetch());
  }, [dispatch]);
  const { playlists, isLoading, playlistsError } = useSelector((state) => state.playlists);

  return (
    <div className="playlists">
      <h1>Playlists</h1>
      <p className="subtitle">Available playlists</p>
      <Link className="link" to="/favorites">Check your favorites :)</Link>
      <p className="loading">{isLoading && 'Loading...'}</p>
      <p className="error">{!!playlistsError && `Error: ${playlistsError}`}</p>
      <div className="gallery">
        {playlists && playlists.map((playlist) => (
          <PlaylistCard playlist={playlist} key={playlist.id}/>
        ))}
      </div>
    </div>
  );
}

export default Playlists;
