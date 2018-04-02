//** action creators **
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
//** async actions **
export const fetchPlaylists = () => {
  return dispatch => {
    return fetch('http://localhost:3001/api/playlists')
    .then(resp => resp.json())
    .then(playlists => dispatch(setPlaylists(playlists)))
    .catch(error => console.log(error))
    }
  }

export const createPlaylist = playlist  => {
  return dispatch => {
    return fetch('http://localhost:3001/api/playlists', {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({playlist: playlist})
  })
    .then(resp => resp.json())
    .then(playlist => {
      debugger
    })
  }
}
