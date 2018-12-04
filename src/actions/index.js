import backend from '../api/backend';
import authorizedRequest from '../api/authorizedRequest';
import iex from '../api/iex';

export function logIn(creds,historyCallback) {
  return dispatch => {
    dispatch({type: 'LOADING'})
    return backend.post('/login', { user: creds })
    .then(response => {
      localStorage.setItem('jwt',response.data.jwt)
      dispatch({ type: 'LOADING_DONE' })
      dispatch({ type: 'LOG_IN', payload: response.data.user })
      historyCallback();
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
    return authorizedRequest.get('/profile')
    .then(response => {
      dispatch({ type: 'LOADING_DONE' })
      dispatch({ type: 'LOG_IN', payload: response.data.user })
      console.log('logged in')
    })
    .catch(r => {
      dispatch({ type: `${r.response.status}`})
    })
  }
}

export function fetchSelectedAsset(sym) {
  return dispatch => {
    return iex.get(`/stock/${sym}/company`)
    .then(response => console.log(response))
  }
}
