import React, { Component } from 'react';

class SongsForm extends Component {
  render() {
    const { state, handleSongsForm } = this.props;
    return (
      state.songs_attributes.map((song, index) => (
        <li key={index}>
        <input
        type="text"
        value={song.title}
        onChange={handleSongsForm(index)}
        />
        </li>
      ))
    )
  }
}

export default SongsForm;
