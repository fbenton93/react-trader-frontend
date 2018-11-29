import { combineReducers } from 'redux';
import AuthorizedReducer from './Authorized';
import CurrentUserReducer from './CurrentUser';

const reducers = combineReducers({
  authorized: AuthorizedReducer,
  currentUser: CurrentUserReducer
})

export default reducers;
