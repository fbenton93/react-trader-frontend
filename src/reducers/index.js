import { combineReducers } from 'redux';
import AuthorizedReducer from './Authorized';
import CurrentUserReducer from './CurrentUser';
import LoadingReducer from './Loading';

const reducers = combineReducers({
  authorized: AuthorizedReducer,
  currentUser: CurrentUserReducer,
  loading: LoadingReducer
})

export default reducers;
