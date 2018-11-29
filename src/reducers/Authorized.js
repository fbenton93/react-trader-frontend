export default function(state = true,action) {
  switch(action.type) {
    case 'LOG_IN':
      return true;
    case 'LOG_OUT':
      return false;
    default:
      return state;
  }
}
