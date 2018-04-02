const initialState = {
  title: "",
  genre: "",
  songs: "",
  img_url: ""
}

export default (state = initialState, action) => {
  switch (action.type){
    case 'UPDATED_DATA':
    return action.playlistFormData

    default:
    return state;
  }
};
