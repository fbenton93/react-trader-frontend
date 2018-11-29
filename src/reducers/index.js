import { combineReducers } from 'redux';
import DummyDataReducer from './DummyData';
import AuthorizedReducer from './Authorized';

const reducers = combineReducers({
  dummyData: DummyDataReducer,
  authorized: AuthorizedReducer
})

export default reducers;
