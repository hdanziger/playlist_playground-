import React from 'react';
import { Link } from "react-router-dom";

const PlaylistCard = ({ playlist }) => (
    <div key={playlist.id} className="PlaylistCard">
    <Link to={`playlists/${playlist.id}`}>
      <h4>Title: {playlist.title}</h4>
      </Link>
      <p>Genre: {playlist.genre}</p>
      <ul>Songs:
      {playlist.songs.map((song, index) => (
        <li key={index}>{song.title} by: {song.artist}</li>
      ))}
      </ul>
      <img src={playlist.img_url} alt={playlist.title} />
    </div>
  )


export default PlaylistCard;
