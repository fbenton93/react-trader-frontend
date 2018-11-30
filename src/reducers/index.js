import { combineReducers } from 'redux';
import AuthorizedReducer from './Authorized';
import CurrentUserReducer from './CurrentUser';
import LoadingReducer from './Loading';
import ErrorsReducer from './Errors';

const reducers = combineReducers({
  authorized: AuthorizedReducer,
  currentUser: CurrentUserReducer,
  loading: LoadingReducer,
  errors: ErrorsReducer
})

export default reducers;
