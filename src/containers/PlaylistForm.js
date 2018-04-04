import React, { Component } from "react";
import { connect } from "react-redux";
import { updatePlaylistFormData } from '../actions/playlistForm'
import { createPlaylist } from '../actions/playlists'
import Navbar from "../components/Navbar";
import SongsForm from './SongsForm';

class PlaylistForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      genre: "",
      img_url: "",
      songs_attributes: [{ title: ''}],
    }
  }

  handleOnChange = event => {
    const { name, value } = event.target;

    this.setState({[name]: value});
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.createPlaylist(this.state, this.props.history)
  }

  handleSongsForm = (index) => (event) => {
    let newSongs;
    newSongs = this.state.songs_attributes.map((song, i) => {
      {return song};
      return {...song, title: event.target.value};
    })
    this.setState({ songs_attributes: newSongs });
  };

  handleAddSong = () => {
    this.setState({
      songs_attributes: this.state.songs_attributes.concat([{ title: ''}]),
    });
  };


  render (){
    return(
      <div className="App-header">
      <h1> Add a playlist</h1>
      <Navbar /><br /><br /><br />
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <div>
            <label htmlFor="title"> Title: </label>
            <input
              type="text"
              onChange={(event) => this.handleOnChange(event)}
              name="title"
              value={this.state.title}
            />
          </div><br />
          <div>
            <label htmlFor="genre"> Genre: </label>
            <input
              type="text"
              onChange={(event) => this.handleOnChange(event)}
              name="genre"
              value={this.state.genre}
            />
          </div><br />
          <div>
            <label htmlFor="img_url"> Image Url: </label>
            <input
              type="text"
              onChange={(event) => this.handleOnChange(event)}
              name="img_url"
              value={this.state.img_url}
            />
          </div><br />
          <div>
            <label> Songs </label>
              <ul>
                <SongsForm
                  state={this.state}
                  handleSongsForm={this.handleSongsForm}
                />
              </ul>
              <input
                type="button"
                value="Add Song"
                onClick={this.handleAddSong}
              />
              </div>

          <button
          type="submit"> Add Playlist</button>
        </form>
      </div>
    )
  }
}

//onClick={() => this.props.history.replace('/playlists')}>

const mapStateToProps = state => {
  return {
    playlistFormData: state.playlistFormData
  }
}
export default connect (mapStateToProps, { updatePlaylistFormData, createPlaylist })(PlaylistForm);
