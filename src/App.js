import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import index from './index';
import Playlists from "./containers/Playlists";


class App extends Component {

  render() {
    return (
      <div className="App">
          <div className="App-header">
             <h1>Welcome to Playlist Playground!</h1>
             </div>
             <Playlists playlists={Playlists} />
          <Router>
        </Router>
      </div>
    );
  }
}

export default App;
