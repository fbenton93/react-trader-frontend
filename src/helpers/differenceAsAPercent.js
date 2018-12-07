import _ from 'lodash';

export default function differenceAsAPercent(val1,val2) {
  const difference = val2 - val1
  const percent = _.round(((difference / val1) * 100),2)
  return percent
}
