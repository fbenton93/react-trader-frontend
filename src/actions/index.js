export function logIn(creds) {
  // no backend yet, just trigger the action to log someone in
  console.log(creds)
  return { type: 'LOG_IN'}
  // this should later carry a payload of currentUser to be set in a reducer
  // jwt to be placed in local storage
}

export function logOut() {
  // removes jwt and redirects to the login page, removes currentUser
  return { type: 'LOG_OUT' }
}
