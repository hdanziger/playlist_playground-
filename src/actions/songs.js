const setSongs = songs => {
  return {
    type: "GET_SONGS_SUCCESS",
    songs
  };
};

export const updateSongFormData = songFormData => {
  return {
    type: "UPDATED_SONG_DATA",
    songFormData
  };
};


export const songsPlaylists = () => {
  return dispatch => {
    return fetch('http://localhost:3001/api/songs')
    .then(resp => resp.json())
    .then(songs => dispatch(setSongs(songs)))
    .catch(error => console.log(error))
    }
  }
