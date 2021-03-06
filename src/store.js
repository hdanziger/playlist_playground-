import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import playlists from './reducers/playlists'


const reducers = combineReducers({
     playlists
  });
const middleware = [thunk];

 const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(...middleware)
);
export default store
