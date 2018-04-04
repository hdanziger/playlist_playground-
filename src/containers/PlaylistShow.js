import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getPlaylist } from '../actions/playlists';
import '../App.css';
import logo from '../logo.svg'
import Navbar from "../components/Navbar";
import { Route } from 'react-router-dom';
//import Playlists from "../containers/Playlists";

const mapStateToProps = (state, ownProps) => {
  return({
    playlist: state.playlists.find(playlist =>
    playlist.id === Number(ownProps.match.params.playlistId))
  })
}

class PlaylistShow extends Component {

  render(){
    const { playlist, history, match } = this.props
    return(
      <div className="App-header">
        <h1> Playlist: {playlist.title} </h1>
        <Navbar /><br /><br /><br />
        <div className="PlaylistShow">
          <img align="right" className="playlistImage" src={playlist.img_url} alt={playlist.title} />
          <p> Genre: {playlist.genre} </p>
          <p> Songs:
      {/*}  {playlist.songs.map((song, index) => (
          <li key={index}>{song.title} by: {song.artist}</li>
        ))}*/}
        </p>
        </div>

      </div>
        )}
      }


const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    getPlaylist: getPlaylist
  }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(PlaylistShow);
