import React, { Component } from 'react';
import { connect } from 'react-redux';

class PlaylistShow extends Component {
  render() {
    let playlist = this.props.playlist[0]

    return (
      <div className="playlistShow">
        <div>
        <h1 className="playlistName">{playlist.title}</h1>
      </div>
      </div>
    )
  };
}
export default PlaylistShow
