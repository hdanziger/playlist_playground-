import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import index from './index';
import Playlists from "./containers/Playlists";

const playlists = [
  { title: "list",
    genre: "pop",
    songs: "songs",
    img_url: ""
  },
  { title: "new list",
    genre: "metal",
    songs: "songsss",
    img_url: ""
  }
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div className="App-header">
             <h1>Welcome to Playlist Playground!</h1>
             <Playlists playlists={playlists} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
