export default function(state = { user: false },action) {
  switch(action.type) {
    case 'LOG_IN':
      return { user: action.payload }
    case 'LOG_OUT':
      return { user: false }
    case 'PURCHASE_COMPLETED':
      return { user: action.payload }
    case 'COMPLETED_SALE':
      return { user: action.payload }
    default:
      return state;
  }
}
