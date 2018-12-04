import { combineReducers } from 'redux';
import AuthorizedReducer from './Authorized';
import CurrentUserReducer from './CurrentUser';
import LoadingReducer from './Loading';
import ErrorsReducer from './Errors';
import ModalOpenReducer from './ModalOpen';
import SelectedAssetReducer from './SelectedAsset';

const reducers = combineReducers({
  authorized: AuthorizedReducer,
  currentUser: CurrentUserReducer,
  loading: LoadingReducer,
  errors: ErrorsReducer,
  modalOpen: ModalOpenReducer,
  selectedAsset: SelectedAssetReducer
})

export default reducers;
