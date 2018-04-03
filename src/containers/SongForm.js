import React, { Component } from "react";
import { connect } from "react-redux";
import { updateSongFormData } from '../actions/songForm';
import { createSong } from '../actions/songs';

class SongForm extends Component {


  render (){
    const { title, artist} = this.props.songFormData;

    return(
      <div>
      <p> Add Songs</p>
        <form>
          <div>
            <label htmlFor="title"> Title: </label>
            <input
              type="text"
              name="title"
              value={title}
            />
          </div><br />
          <div>
            <label htmlFor="artist"> Artist: </label>
            <input
              type="text"
              name="artist"
              value={artist}
            />
            </div>
          <div>
            <label htmlFor="title"> Title: </label>
            <input
              type="text"
              name="title"
              value={title}
            />
          </div><br />
          <div>
            <label htmlFor="artist"> Artist: </label>
            <input
              type="text"
              name="artist"
              value={artist}
            />
            </div>
          <div>
            <label htmlFor="title"> Title: </label>
            <input
              type="text"
              name="title"
              value={title}
            />
          </div><br />
          <div>
            <label htmlFor="artist"> Artist: </label>
            <input
              type="text"
              name="artist"
              value={artist}
            />
            </div>
        </form>
      </div>
    )}
  }

  export default SongForm;
