import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getPlaylist } from '../actions/playlists';
import '../App.css';
import logo from '../logo.svg'
import Navbar from "../components/Navbar";
import PlaylistEdit from './PlaylistEdit';
//import Playlists from "../containers/Playlists";

class PlaylistShow extends Component {
  componentDidMount(){
    this.props.getPlaylist(this.props.match.params.playlistId);
  }

  render(){
    let playlist = this.props.playlist[0];
    const { history } = this.props
    return(
      <div className="App-header">
        <h1> Playlist: {playlist.title} </h1>
        <Navbar /><br /><br /><br />
        <div className="PlaylistShow">
          <img align="right" className="playlistImage" src={playlist.img_url} alt={playlist.title} />
          <p> Genre: {playlist.genre} </p>
          <p> Songs:
        {playlist.songs.map((song, index) => (
          <li key={index}>{song.title} by: {song.artist}</li>
        ))}
        </p>
        </div>
        <PlaylistEdit />
      </div>
        )}
      }

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    getPlaylist: getPlaylist
  }, dispatch);
}

const mapStateToProps = (state) => {
  return({
    playlist: state.playlists
  })
}
export default connect(mapStateToProps, mapDispatchToProps)(PlaylistShow);
