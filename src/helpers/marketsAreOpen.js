const marketsAreOpen = () => {
  const day = (new Date()).getUTCDay();
  const timeHr = (new Date()).getUTCHours();
  const timeMin = (new Date()).getMinutes();
  // this could include a list of holidays, too

  if(timeHr >= 21 || timeHr < 14 || (timeHr === 14 && timeMin < 30) || day <= 1) {
    return true;
  } else {
    return false;
  }
}

export default marketsAreOpen;
