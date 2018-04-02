import React from 'react';
import "../App.css";
import Playlists from "../containers/Playlists";
import Navbar from './Navbar';
const Home = () => {
  return (
    <div className="App-header">
      <h1>Welcome to Playlist Playground!</h1>
        <Navbar />
    </div>
  )
}

export default Home;
