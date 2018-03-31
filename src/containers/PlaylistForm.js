import React, {Component} from "react";
import { connect } from "react-redux";

class PlaylistForm extends Component {
  handleOnChange = event => {
    const { name, value } = event.target;
    const currentPlaylistFormData = Object.assign(
      {},
      this.props.playlistFormData,
      {
    [   name]: value
    }
  );
    this.props.updatePlaylistFormData(currentPlaylistFormData);
  };

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.createPlaylist(this.props.playlistFormData);
  };

  render () {
    const {
      title,
      genre,
      img_url
    } = this.props.playlistFormData;

    return (
    <div className="addPlaylist">
          <h1> Add a playlist </h1>
        <form onSubmit={this.handleOnSubmit}>
          <div>
            <label htmlFor="title">
            </label>
            <input
              type="text"
              onChange={this.handleOnChange}
              name="title"
              value={title}
            />
          </div>
          <div>
            <label htmlFor="genre">
            </label>
            <input
              type="text"
              onChange={this.handleOnChange}
              name="genre"
              value={genre}
            />
          </div>
          <button type="submit">Add Playlist</button>
        </form>
    </div>
    )
  }
}
export default PlaylistForm
