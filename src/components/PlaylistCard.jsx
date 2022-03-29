import React from "react";
import { usePalette } from "react-palette";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setFavoritePlaylist, removeFavoritePlaylist } from "../redux/reducers/playlistsSlice";
import { getSpotifyCode } from "./helpers";
import "./PlaylistCard.css";

function PlaylistCard({playlist}) {
  
  const dispatch = useDispatch();

  const { favoritePlaylists } = useSelector((state) => state.playlists);
  const isFavorite = favoritePlaylists.find(favPlaylist => favPlaylist.id === playlist.id);

  const { data } = usePalette(playlist.images[0].url);
  const color = data.muted?.substring(1);

  return (
    <div
      className="row"
    >
      <div className="column column-left">
        <Link to={`/playlists/${playlist.id}`}>
          <img
            alt={playlist.name}
            className="playlist-img"
            src={playlist.images[0]?.url}
          />
        </Link>
      </div>
      <div className="column column-right">
        <h2>{playlist.name}</h2>
        <h5>{playlist.description}</h5>
        <div className="details-wrapper">
          {!!color && <img
            alt={playlist.name}
            className="code"
            src={getSpotifyCode(color, playlist.uri)}
          />}
          <button className={`like${(isFavorite ? " selected": '')}`}
          onClick={() => dispatch(isFavorite ? removeFavoritePlaylist(playlist) : setFavoritePlaylist(playlist))}>
          ♡
          </button>
        </div>
      </div>
    </div>
  );
}

export default PlaylistCard;
