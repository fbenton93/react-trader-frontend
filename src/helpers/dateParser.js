export default function(date) {
  let dateArr = date.split('-')
  const y = dateArr[0]
  const m = dateArr[1]
  const d = dateArr[2]

  return new Date(y,m,d)
}
