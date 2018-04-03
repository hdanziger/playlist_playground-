import React from 'react';
import "../App.css";
import Playlists from "../containers/Playlists";
import Navbar from './Navbar';
const Home = () => {
  return (
    <div className="App">
    <div className="App-header">
      <h1> Welcome to Playlist Playground!</h1>
      <Navbar />
    </div>
    <img src="http://i.imgur.com/7N5HQja.gif" className="homeImage" />
    <h3> Explore playlists and create your own! </h3>
    </div>
  )
}

export default Home;
