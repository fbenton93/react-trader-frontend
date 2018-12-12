const defaultSetting = { modal: false, submitted: false }

export default function(state = defaultSetting,action) {
  switch(action.type) {
    case 'ASSET_SELECTED':
      return { modal: true, submitted: false };
    case 'MODAL_CLOSE':
      return { modal: false, submitted: false };
    case 'COMPLETED_SALE':
      return { modal: true, submitted: true};
    case 'PURCHASE_COMPLETED':
      return { modal: true, submitted: true};
    default:
      return state;
  }
}
