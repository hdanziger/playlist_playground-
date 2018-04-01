import React, {Component} from "react";
import {connect} from "react-redux";

import { fetchPlaylists } from '../actions/playlists';

class Playlists extends Component {
  componentDidMount(){
    this.props.fetchPlaylists();
  }
  render(){
    return(
      <div>
      <h3> Playlists </h3>
      {props.surfboards.map(playlist =>
      <div>
        <h4>{playlist.title}</h4>
        <p>{playlist.genre}</p>
        <p>{playlist.songs}</p>
        <imp src={playlist.img_url} alt={playlist.title} />
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
