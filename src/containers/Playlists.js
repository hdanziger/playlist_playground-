import React, {Component} from "react";
import {connect} from "react-redux";
import './playlists.css'
import { fetchPlaylists } from '../actions/playlists';

class Playlists extends Component {
  componentDidMount(){
    this.props.fetchPlaylists();
    //debugger
  }
  render(){
    return(
      <div>
      <h3> Playlists </h3>
      {this.props.playlists.map(playlist =>
      <div className="playlistCard"
      key={playlist.id} playlist={playlist}>
        <h4>Title: {playlist.title}</h4>
        <p>Genre: {playlist.genre}</p>
        <p>Songs: {playlist.songs}</p>
        <img src={playlist.img_url} alt={playlist.title} />
        </div>
      )}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return ({
    playlist: state.playlist
  })
}
export default connect(mapStateToProps, { fetchPlaylists })(Playlists);
