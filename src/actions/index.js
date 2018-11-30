import backend from '../api/backend';
import authorizedRequest from '../api/authorizedRequest';

export function logIn(creds,historyCallback) {
  return dispatch => {
    dispatch({type: 'LOADING'})
    return backend.post('/login', { user: creds })
    .then(response => {
      console.log(response)
      localStorage.setItem('jwt',response.data.jwt)
      dispatch({ type: 'LOADING_DONE' })
      dispatch({ type: 'LOG_IN', payload: response.data.user })
      historyCallback();
    })
    .catch(r => {
      dispatch({ type: `${r.response.status}` })
    })
  }
  // this should later carry a payload of currentUser to be set in a reducer
  // jwt to be placed in local storage
}

export function logOut() {
  // removes jwt and redirects to the login page, removes currentUser
  return { type: 'LOG_OUT' }
}

export function fetchCurrentUser() {
  // makes call to api and sets currentUser, authorizes
  console.log('attempting to fetch current user')
}
