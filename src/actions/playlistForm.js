// ** action creators
export const updatePlaylistFormData = playlistFormData => {
  return {
    type: "UPDATED_DATA",
    playlistFormData
  };
};

export const resetPlaylistForm = () => {
  return{
    type: "RESET_PLAYLIST_FORM"
  };
};
