import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getPlaylist } from '../actions/playlists';
import '../App.css';
//import Playlists from "../containers/Playlists";

class PlaylistShow extends Component {
  componentDidMount(){
    this.props.getPlaylist(this.props.match.params.playlistId);
  }

  render(){
    let playlist = this.props.playlist[0];
    const { history } = this.props;
    return(
      <div className="App-header">
      <h1> Playlist: {playlist.title} </h1>
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
