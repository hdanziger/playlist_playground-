import React from 'react';

const PlaylistCard = ({ playlist }) => (
    <div key={playlist.id} className="PlaylistCard">
      <h4>Title: {playlist.title}</h4>
      <p>Genre: {playlist.genre}</p>
      <p>Songs: {playlist.songs}</p>
      <img src={playlist.img_url} alt={playlist.title} />
    </div>
  )


export default PlaylistCard;
