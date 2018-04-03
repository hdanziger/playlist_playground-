const initialState = {
  title: "",
  artist: ""
}

export default (state = initialState, action) => {
  switch (action.type){
    case 'UPDATED_SONG_DATA':
      return action.songFormData;
    default:
      return state;
  }
};
