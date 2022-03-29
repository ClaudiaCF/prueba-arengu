import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPlaylistsFetch } from "../redux/reducers/playlistsSlice";
import PlaylistCard from "../components/PlaylistCard.jsx";
import "../styles.css";
import { Link } from "react-router-dom";

function FavoritePlaylists() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPlaylistsFetch());
  }, [dispatch]);
  const { favoritePlaylists } = useSelector((state) => state.playlists);

  return (
    <div className="fav-playlists">
      <h1>Fav Playlists</h1>
      <p>Favorite playlists</p>
      <Link className="link" to="/">Go back to your playlists</Link>
      <div className="gallery">
        {favoritePlaylists.map((playlist) => (
          <PlaylistCard playlist={playlist} key={playlist.id}/>
        ))}
      </div>
    </div>
  );
}

export default FavoritePlaylists;
