import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';

class PlaylistCard extends Component {
  render
  let playlist = this.props.playlist;
  let playlists = this.props.playlists;
  return (
    <div key={playlist.id} className="PlaylistCard">
    <Link to={`playlists${playlist.id}`}>
    <h1 className="card-title">{playlist.title}</h1>
    </Link>
  )
}

export default PlaylistCard
