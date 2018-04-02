import React, {Component} from "react";
import {connect} from "react-redux";
import './playlists.css'
import { fetchPlaylists } from '../actions/playlists';
import PlaylistCard from '../components/PlaylistCard';
import PlaylistForm from './PlaylistForm';

class Playlists extends Component {
  componentDidMount(){
    this.props.fetchPlaylists();
    //debugger
  }
  render(){
    return(
      <div className="PlaylistsContainer">
      <h3> Playlists </h3>
        {this.props.playlists.map(playlist => <PlaylistCard key={playlist.id} playlist={playlist} />)}
        <PlaylistForm />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return({
    playlists: state.playlists
  })
}
export default connect(mapStateToProps, { fetchPlaylists })(Playlists);
