import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Playlists from "./containers/Playlists";
import PlaylistShow from "./containers/PlaylistShow";
import PlaylistForm from "./containers/PlaylistForm";
import index from './index'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div className="App-header">
            <h1>Welcome to Playlist Playground!</h1>
            <Switch>
              <Route exact path="/" component={Home} />
            <Route exact path='/playlists/new' component={PlaylistForm} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
