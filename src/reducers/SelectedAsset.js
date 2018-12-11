const defaultState = {
  CEO: "Loading...",
  companyName: "Loading...",
  sector: "Loading...",
  description: "Loading...",
  exchange: "Loading..."
}





export default function(state = defaultState,action) {
  switch(action.type) {
    case 'ASSET_SELECTED':
      return action.payload;
    case 'ADD_QUOTE':
      return {...state,...action.payload}
    case 'ADD_ASSET_ID':
      return {...state, ...action.payload}
    default:
      return state;
  }
}
