import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import index from './index';
import Playlists from "./containers/Playlists";
import Home from "./components/Home";
import PlaylistForm from "./containers/PlaylistForm";
import PlaylistShow from "./containers/PlaylistShow";


class App extends Component {

  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/playlists" component={Playlists} />
              <Route exact path="/playlists/new" component={PlaylistForm} />
              <Route path="/playlists/:playlistId" component={PlaylistShow}/>
              </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
