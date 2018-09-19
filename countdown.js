if (getTimeRemaining(new Date('2018-07-29T03:24:45'), new Date('2018-07-29T03:24:45')) !== '00:00') {
  throw new Error('should return 0 time if end time is same as current time');
}

if (getTimeRemaining(new Date('2018-07-29T03:24:45'), new Date('2018-07-29T03:24:12')) !== '00:33') {
  throw new Error('should return the time difference');
}

if (getTimeRemaining(new Date('2018-07-29T03:24:45'), new Date('2018-07-29T03:04:36')) !== '20:09') {
  throw new Error('should return the time difference with minutes and seconds');
}

if (getTimeRemaining(new Date('2018-07-29T03:24:45'), new Date('2018-07-29T03:22:46')) !== '01:59') {
  throw new Error('should return the time difference with minutes and seconds');
}

function getTimeRemaining(stopTime, currentTime) {
  const stopTimestamp = stopTime.getTime();
  const currentTimestamp = currentTime.getTime();
  const totalSecondsRemaining = ((stopTimestamp - currentTimestamp) / 1000);

  const minutesRemaining = Math.floor(totalSecondsRemaining / 60);
  const secondsRemaining = Math.floor(totalSecondsRemaining % 60);

  const formattedMinutes = (`0${minutesRemaining}`).slice(-2);
  const formattedSeconds = (`0${secondsRemaining}`).slice(-2);

  return `${formattedMinutes}:${formattedSeconds}`;
}
