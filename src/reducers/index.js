import { combineReducers } from 'redux';
import AuthorizedReducer from './Authorized';
import CurrentUserReducer from './CurrentUser';
import LoadingReducer from './Loading';
import ErrorsReducer from './Errors';
import ModalOpenReducer from './ModalOpen';
import SelectedAssetReducer from './SelectedAsset';
import GainLossReducer from './GainLoss';

const reducers = combineReducers({
  authorized: AuthorizedReducer,
  currentUser: CurrentUserReducer,
  loading: LoadingReducer,
  errors: ErrorsReducer,
  modalOpen: ModalOpenReducer,
  selectedAsset: SelectedAssetReducer,
  gainLoss: GainLossReducer
})

export default reducers;
