import _ from 'lodash';

export default function reduceAssets(entryList) {
  let returnObj = {}
  entryList.forEach((entry) => {
    const cost = _.round((entry.price * entry.quantity),2)
    if(!returnObj[entry.ticker]) {
      returnObj[entry.ticker] = {...entry, totalSpent: cost }
    } else {
      returnObj[entry.ticker].totalSpent += cost
      returnObj[entry.ticker].quantity += entry.quantity
    }
  })
  return returnObj;
}
