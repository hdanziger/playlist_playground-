import React, { Component } from "react";
import { connect } from "react-redux";
import { updatePlaylistFormData } from '../actions/playlistForm'
import { createPlaylist } from '../actions/playlists'
import Navbar from "../components/Navbar";

class PlaylistForm extends Component {

  handleOnChange = event => {
    const { name, value } = event.target;
    const currentPlaylistFormData = Object.assign({}, this.props.playlistFormData, {
      [name]: value
    })
    this.props.updatePlaylistFormData(currentPlaylistFormData)
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.createPlaylist(this.props.playlistFormData)
  }
  render (){
    const { title, genre, songs, img_url} = this.props.playlistFormData;

    return(
      <div className="App-header">
      <h1> Add a playlist</h1>
      <Navbar /><br /><br /><br />
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
          <button type="submit">Add Playlist</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    playlistFormData: state.playlistFormData
  }
}
export default connect (mapStateToProps, { updatePlaylistFormData, createPlaylist })(PlaylistForm);
