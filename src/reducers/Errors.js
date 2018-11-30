const defaultState = { error: 'none'}

export default function(state = defaultState,action) {
  switch(action.type) {
    case "401":
      return { error: action.type };
    case "LOG_IN":
      return defaultState;
    default:
      return state;
  }
}
