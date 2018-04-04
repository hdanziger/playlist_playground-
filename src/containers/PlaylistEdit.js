import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updatePlaylist } from '../actions/playlists';
import { getPlaylist } from '../actions/playlists';


class PlaylistEdit extends Component {
  handleOnChange = event => {
    const { name, value } = event.target;
    const currentPlaylistFormData = Object.assign({}, this.props.playlistFormData, {
      [name]: value
    });
    this.props.updatePlaylistFormData(currentPlaylistFormData)
  };

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.updatePlaylist(this.props.playlist.id, this.props.playlistFormData);
  };

  render (){
    const { title, genre, songs, img_url} = this.props.playlistFormData;

    return(
      <div className="PlaylistContainer">
        <h1> Edit This Playlist </h1>
          <form onSubmit={this.handleOnSubmit}>
            <div>
              <label htmlFor="title"> Title: </label>
              <input
                type="text"
                onChange={this.handleOnChange}
                name="title"
                value={title}
              />
            </div><br />
            <div>
              <label htmlFor="genre"> Genre: </label>
              <input
                type="text"
                onChange={this.handleOnChange}
                name="genre"
                value={genre}
              />
            </div><br />
            <div>
              <label htmlFor="img_url"> Image Url: </label>
              <input
                type="text"
                onChange={this.handleOnChange}
                name="img_url"
                value={img_url}
              />
            </div><br />
            <div>
                <label htmlFor="songs"> Add Songs: </label>
                  <input
                    type="text"
                    onChange={this.handleOnChange}
                    name="songs"
                    value={songs}
                    />
            </div><br />
            <button type="submit">Update Playlist</button>
          </form>
        </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    playlistFormData: state.playlistFormData,
    playlist: state.playlists[0]
  }
}

export default connect(mapStateToProps, {updatePlaylistFormData, updatePlaylist, getPlaylist})(PlaylistEdit);
