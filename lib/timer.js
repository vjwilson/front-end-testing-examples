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

module.exports = {
  getTimeRemaining: getTimeRemaining
}
