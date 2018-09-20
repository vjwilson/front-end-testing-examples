describe('getTimeRemaining function', () => {
  it('should return 0 time if end time is same as current time', () => {
    const stopTime = new Date('2018-07-29T03:24:45');
    const currentTime = new Date('2018-07-29T03:24:45');

    const timeStr = getTimeRemaining(stopTime, currentTime);

    expect(timeStr).toEqual('00:00');
  });

  it('should return the time difference', () => {
    const stopTime = new Date('2018-07-29T03:24:45');
    const currentTime = new Date('2018-07-29T03:24:12');

    const timeStr = getTimeRemaining(stopTime, currentTime);

    expect(timeStr).toEqual('00:33');
  });

  it('should return the time difference with minutes and seconds', () => {
    const stopTime = new Date('2018-07-29T03:24:45');
    const currentTime = new Date('2018-07-29T03:04:36');

    const timeStr = getTimeRemaining(stopTime, currentTime);

    expect(timeStr).toEqual('20:09');
  });

  it('should return the time difference of minutes with leading 0 and seconds', () => {
    const stopTime = new Date('2018-07-29T03:24:45');
    const currentTime = new Date('2018-07-29T03:22:46');

    const timeStr = getTimeRemaining(stopTime, currentTime);

    expect(timeStr).toEqual('01:59');
  });
});

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
