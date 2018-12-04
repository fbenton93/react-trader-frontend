export default function(state = false,action) {
  switch(action.type) {
    case 'ASSET_SELECTED':
      return true;
    case 'MODAL_CLOSE':
      return false;
    default:
      return state;
  }
}
