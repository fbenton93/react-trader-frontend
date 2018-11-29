export default function(state = false,action) {
  switch(action.type) {
    case 'LOADING':
      return true;
    case 'LOADING_DONE':
      return false;
    default:
      return state;
  }
}
