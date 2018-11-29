export default function(state = false,action) {
  switch(action.type) {
    case 'LOG_IN':
      return true;
    case 'LOG_OUT':
    default:
      return false;
  }
}
