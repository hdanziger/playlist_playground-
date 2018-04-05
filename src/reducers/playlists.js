export default (state = [], action) => {
  switch (action.type) {
    case "GET_PLAYLISTS_SUCCESS":
    return action.playlists;

    case "CREATE_PLAYLIST_SUCCESS":
    return [...state, action.playlist];

    default:
    return state;
  }
}
