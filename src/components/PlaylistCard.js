import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../containers/playlists.css'

class PlaylistCard extends Component {
  constructor() {
    super();

    this.state = {
      likes: 0,
    }

  }

  handleLikes = () =>  {
    let newCount = this.state.likes + 1
    this.setState({
      likes: newCount
    })
  }

  callApi = () => {
    console.log('a')
     fetch('http://localhost:3001/api/playlistsfdsfdsfds')
      .then(resp => {
        if (resp.ok) {
          console.log('b')

          return resp.json()

        } else {
          throw new Error("bad request!!!")
        }
      })
      .then(function(playlists) {
         console.log('c', playlists)
      })
      .catch(err => console.log('d', err))
      console.log('e')

      // a e b c + playlists

      // a d
    }


  render() {
    const  { playlist, history } = this.props
    return (
    <div key={playlist.id} className="PlaylistCard">
    <Link to={`playlists/${playlist.id}`}>
      <h4>Title: {playlist.title}</h4>
      <img align="right" className="playlistImage" src={playlist.img_url} alt={playlist.title} />
      </Link>
      <p><strong>Genre: </strong>{playlist.genre}</p>
      <strong>Songs:</strong>
      {playlist.songs.map((song, index) => (
        <li key={index}>{song.title}</li>
      ))}
      <button onClick={this.handleLikes}>
      Like me!
      </button>
      <p> likes={this.state.likes} </p>
      <button onClick={this.callApi}>
      Call Api
      </button>

    </div>
  )
}
}


export default PlaylistCard;
