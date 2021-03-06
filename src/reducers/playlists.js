export default (state = [], action) => {
  switch (action.type) {
    case "GET_PLAYLISTS_SUCCESS":
    return action.playlists;

    case "CREATE_PLAYLIST_SUCCESS":
    return [...state, action.playlist];

    case 'REMOVE_PLAYLIST': {
      const idx = state.findIndex(playlist => playlist.id === action.playlistId);
      return [...state.slice(0, idx), ...state.slice(idx + 1)]
    }


    default:
    return state;
  }
}
