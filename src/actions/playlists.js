const setPlaylists = playlists => {
  return {
    type: "GET_PLAYLISTS_SUCCESS",
    playlists
  };
};

const addPlaylist = playlist => {
  return {
    type: "CREATE_PLAYLIST_SUCCESS",
    playlist
  };
};

const updatePlaylist = playlist => {
  return{
    type: "UPDATE_PLAYLIST_SUCCESS",
    playlist
  };
};

export const fetchPlaylists = () => {
  return dispatch => {
    return fetch('http://localhost:3001/api/playlists')
    .then(resp => resp.json())
    .then(playlists => dispatch(setPlaylists(playlists)))
    .catch(error => console.log(error))
    }
  }
