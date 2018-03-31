const setPlaylists = playlists => {
  return {
    type: "GET_PLAYLISTS_SUCCESS",
    playlists
  };
};

const addPlaylist = playlist => {
  return {
    "CREATE_PLAYLIST_SUCCESS",
    playlist
  };
};

const updatePlaylist = playlist => {
  return{
    "UPDATE_PLAYLIST_SUCCESS",
    playlist
  };
};
