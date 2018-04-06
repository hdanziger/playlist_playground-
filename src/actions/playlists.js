//** action creators **
export function setPlaylists(playlists){
  return {
    type: "GET_PLAYLISTS_SUCCESS",
    playlists
  };
};

export function addPlaylist(playlist){
  return {
    type: "CREATE_PLAYLIST_SUCCESS",
    playlist
  };
};

export const removePlaylist = playlistId => {
  return {
    type: "REMOVE_PLAYLIST",
    playlistId
  }
}

export const addLikes = playlist => {
  return {
    type: "LIKE_PLAYLIST",
    playlist
  };
};
//** async actions **
export const fetchPlaylists = () => {
  return dispatch => {
    return fetch('http://localhost:3001/api/playlists')
    .then(function(resp) {
      return resp.json()
    })
    .then(playlists => dispatch(setPlaylists(playlists)))
    .catch(error => console.log(error))
    }
  }

  export const getPlaylist = playlistId => {
    return dispatch => {
      return fetch(`http://localhost:3001/api/playlists/${playlistId}`)
      .then(resp => resp.json())
      .then(playlist => {
        dispatch(setPlaylists([playlist]));
      })
      .catch(error => console.log(error));
    };
  };

export const createPlaylist = (playlist, history)  => {
  return dispatch => {
    return fetch('http://localhost:3001/api/playlists', {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({playlist: playlist})
  })
    .then(resp => resp.json())
    .then(playlist =>
      {
        history.replace('/playlists')
        dispatch(addPlaylist(playlist))
      })
    }
  }

  export const likePlaylist = playlist => {
    const updatedPlaylist = Object.assign(...playlist, {
    likes: playlist.likes + 1
  });
    return dispatch => {
      return fetch(`http://localhost:3001/api/playlists/${playlist.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ playlist: updatedPlaylist })
      })
        .then(response => response.json())
        .then(playlist => {
          dispatch(addLikes(playlist));
        })
        .catch(error => console.log(error));
    };
  };

  export const deletePlaylist = (playlistId, routerHistory) => {
  return dispatch => {
    return fetch(`http://localhost:3001/api/playlists/${playlistId}`, {
      method: 'DELETE'
    })
    .then(res => {
      if (res.status === 204) {
        routerHistory.replace('/playlists')
        dispatch(removePlaylist(playlistId));
      }
    })
    .catch(error =>  console.log(error));
  };
};
