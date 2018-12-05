import dateParser from './dateParser';

export default function(dataArray) {
  return dataArray.map(datum => {
    return {...datum, date: dateParser(datum.date)}
  })
}
