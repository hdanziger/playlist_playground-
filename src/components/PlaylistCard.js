import React from 'react';
import { Link } from "react-router-dom";
import '../containers/playlists.css'

const PlaylistCard = ({ playlist, history }) => (
    <div key={playlist.id} className="PlaylistCard">
    <Link to={`playlists/${playlist.id}`}>
      <h4>Title: {playlist.title}</h4>
      <img align="right" className="playlistImage" src={playlist.img_url} alt={playlist.title} />
      </Link>
      <p><strong>Genre: </strong>{playlist.genre}</p>
      <strong>Songs:</strong>
      {playlist.songs.map((song, index) => (
        <li key={index}>{song.title} by {song.artist}</li>
      ))}

    </div>
  )


export default PlaylistCard;
