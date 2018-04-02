import React, {Component} from "react";
import {connect} from "react-redux";
import './playlists.css'
import { fetchPlaylists } from '../actions/playlists';
import PlaylistCard from '../components/PlaylistCard';
import { bindActionCreators } from 'redux';
import PlaylistForm from './PlaylistForm';

class Playlists extends Component {
  componentDidMount(){
    this.props.fetchPlaylists();
  }
  render(){
    return(
      <div>
      <h1 className="App-header"> Playlists </h1>
        {this.props.playlists.map(playlist =>
          <PlaylistCard key={playlist.id} playlist={playlist}/>)} 
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    fetchPlaylists: fetchPlaylists
  }, dispatch);
}

const mapStateToProps = (state) => {
  return({
    playlists: state.playlists
  })
}
export default connect(mapStateToProps, mapDispatchToProps)(Playlists);
