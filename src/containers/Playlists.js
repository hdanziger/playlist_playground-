import React, {Component} from "react";
import {connect} from "react-redux";
import './playlists.css'
import { fetchPlaylists } from '../actions/playlists';
import PlaylistCard from '../components/PlaylistCard';
import { bindActionCreators } from 'redux';
import PlaylistForm from './PlaylistForm';
import Navbar from "../components/Navbar";

class Playlists extends Component {
  componentDidMount(){
    this.props.fetchPlaylists();
  }


  render(){
    return(
      <div className="App-header">
        <h1> Playlists </h1>
      { /* <PlaylistForm getData={ this.getData }/> */}
        <Navbar />
        {this.props.playlists.map(playlist =>
          <PlaylistCard key={playlist.id} playlist={playlist}/>)}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return({
    playlists: state.playlists
  })
}
export default connect(mapStateToProps, {fetchPlaylists})(Playlists);
