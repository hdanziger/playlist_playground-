import React from 'react';
import "../App.css";
import Playlists from "../containers/Playlists";

const Home = () => {
  return (
    <div className="App-header">
      <h1>Welcome to Playlist Playground!</h1>
    <h1> Playlist Home </h1>
    <Playlists playlists={Playlists} />
</div>
  )
}

export default Home;
