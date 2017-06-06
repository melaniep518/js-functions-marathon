function timeToDecimal(str) {
  let time = str.split(':');
  let hoursInSeconds = parseInt(time[0])*60*60;
  let minutesInSeconds = parseInt(time[1])*60;
  let seconds = parseInt(time[2]);
  let minutesTotal = (hoursInSeconds + minutesInSeconds + seconds)/60;
  return parseFloat((minutesTotal/60).toFixed(4))
}

function decimalToTime(time) {
  let hours = parseInt(time);
  let minutesAndSeconds = (time-hours)*60;
  let minutes = ((time-hours)*60).toString().split('.')[0];
  let seconds = Math.round((minutesAndSeconds - minutes)*60);
  hours = hours.toString();
  if(hours.length === 1) {
    hours = '0' + hours;
  }
  minutes = minutes.toString();
  if(minutes.length === 1) {
    minutes = '0' + minutes;
  }
  seconds = seconds.toString();
  if(seconds.length === 1) {
    seconds = '0' + seconds;
  }
  return hours + ':' + minutes + ':' + seconds;
}

function paceToMarathonTime(pace) {
 let paceInDecimal = timeToDecimal(pace);
 let totalMarathonTime = paceInDecimal*26.2;
 return 'Expected marathon time ' + decimalToTime(totalMarathonTime);
}

function marathonToPacePerMile(time) {
  let totalTimeInDecimals = timeToDecimal(time);
  let paceInDecimal = totalTimeInDecimals/26.2;
  let pacePerMile = decimalToTime(paceInDecimal);
  let pacePerMileArray = pacePerMile.split(':');
  pacePerMileArray.shift();
  pacePerMile = pacePerMileArray.join(':')
  return 'Pace time ' + pacePerMile;
}
