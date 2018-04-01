import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import index from './index';
import Playlists from "./containers/Playlists";

const playlists = [
  { title: "list",
    genre: "pop",
    songs: "songs",
    img_url: "https://assets.rbl.ms/13591752/980x.jpg"
  },
  { title: "new list",
    genre: "metal",
    songs: "songsss",
    img_url: "https://assets.rbl.ms/13591771/980x.jpg"
  }
]

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      playlists: []
    }
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
          <div className="App-header">
             <h1>Welcome to Playlist Playground!</h1>
             </div>
             <Playlists playlists={playlists} />
          <Router>
        </Router>
      </div>
    );
  }
}

export default App;
