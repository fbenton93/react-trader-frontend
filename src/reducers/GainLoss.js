export default function(state = { default: 0 },action) {
  switch(action.type) {
    case 'UPDATE_GAIN_LOSS':
      return {...state, ...action.payload};
    default:
      return state;
  }
}
