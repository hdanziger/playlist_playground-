import React, { Component } from 'react';

class SongsForm extends Component {
  render() {
    const { state, handleSongsForm, handleSongRemoval } = this.props;
    return (
      state.songs_attributes.map((song, index) => (
        <p key={index}>
        <input
        type="text"
        value={song.title}
        onChange={handleSongsForm(index)}
        />
        <input
        type="button"
        value='X'
        onClick={handleSongRemoval(index)}
        />
        </p>
      ))
    )
  }
}

export default SongsForm;
