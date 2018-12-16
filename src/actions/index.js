import axios from 'axios';
import backend from '../api/backend';
import iex from '../api/iex';

export function signup(creds,redirectCallback) {
  return dispatch => {
    dispatch({ type: 'LOADING' })
    return backend.post('/users', {user: {...creds}})
    .then(response => {
      if(localStorage.getItem('jwt')) {
        localStorage.removeItem('jwt')
        dispatch({ type: 'LOG_OUT'});
      }
      localStorage.setItem('jwt', response.data.jwt)
      axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.jwt}`
      dispatch({ type: 'LOADING_DONE' })
      dispatch({ type: 'LOG_IN', payload: response.data.user })
      redirectCallback();
    })
    .catch(r => {
      dispatch({ type: `${r.response.status}`})
    })
  }
}

export function logIn(creds) {
  return dispatch => {
    dispatch({type: 'LOADING'})
    return backend.post('/login', { user: creds })
    .then(response => {
      localStorage.setItem('jwt',response.data.jwt)
      axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.jwt}`
      dispatch({ type: 'LOADING_DONE' })
      dispatch({ type: 'LOG_IN', payload: response.data.user })
    })
    .catch(r => {
      dispatch({ type: `${r.response.status}` })
    })
  }
}

export function logOut() {
  localStorage.removeItem('jwt')
  return { type: 'LOG_OUT' }
}

export function fetchCurrentUser() {
  return dispatch => {
    dispatch({ type: 'LOADING'})
    return backend.get('/profile')
    .then(response => {
      dispatch({ type: 'LOADING_DONE' })
      dispatch({ type: 'LOG_IN', payload: response.data.user })
    })
    .catch(r => {
      dispatch({ type: `${r.response.status}`})
    })
  }
}

export function fetchSelectedAsset(sym) {
  return dispatch => {
    delete axios.defaults.headers.common["Authorization"]
    return iex.get(`/stock/${sym}/company`)
    .then(response => {
      dispatch({ type: 'ASSET_SELECTED', payload: response.data })
    })
    .then(() => {
      return iex.get(`/stock/${sym}/delayed-quote`)
      .then(response => {
        dispatch({ type: 'ADD_QUOTE', payload: response.data })
        axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('jwt')}`
      })
    })
  }
}

export const fetchExistingAsset = (sym,id) => async (dispatch) => {
  await dispatch(fetchSelectedAsset(sym))
  dispatch({ type: 'ADD_ASSET_ID', payload: {id} })
}

export function modalClose() {
  return { type: 'MODAL_CLOSE' }
}

export function modalOpen() {
  return { type: 'MODAL_CLOSE'}
}

export function purchaseAsset(reqObj) {
  return dispatch => {
    return backend.post('/assets',{ asset: {...reqObj}})
    .then(response => {
      dispatch({ type: 'PURCHASE_COMPLETED', payload: response.data.user })
    })
    .catch(r => {
      dispatch({ type: `${r.response.status}`})
    })
  }
}

export function sellAsset(reqObj) {
  return dispatch => {
    return backend.patch(`/assets/${reqObj.id}`, { asset: {...reqObj}})
    .then(response => {
      dispatch({ type: 'COMPLETED_SALE', payload: response.data.user })
    })
  }
}

export function updateGainLoss(asset) {
  return { type: 'UPDATE_GAIN_LOSS', payload: asset }
}
