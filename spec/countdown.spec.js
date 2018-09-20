const timer = require('../lib/timer');

describe('getTimeRemaining function', () => {
  it('should return 0 time if end time is same as current time', () => {
    const stopTime = new Date('2018-07-29T03:24:45');
    const currentTime = new Date('2018-07-29T03:24:45');

    const timeStr = timer.getTimeRemaining(stopTime, currentTime);

    expect(timeStr).toEqual('00:00');
  });

  it('should return the time difference', () => {
    const stopTime = new Date('2018-07-29T03:24:45');
    const currentTime = new Date('2018-07-29T03:24:12');

    const timeStr = timer.getTimeRemaining(stopTime, currentTime);

    expect(timeStr).toEqual('00:33');
  });

  it('should return the time difference with minutes and seconds', () => {
    const stopTime = new Date('2018-07-29T03:24:45');
    const currentTime = new Date('2018-07-29T03:04:36');

    const timeStr = timer.getTimeRemaining(stopTime, currentTime);

    expect(timeStr).toEqual('20:09');
  });

  it('should return the time difference of minutes with leading 0 and seconds', () => {
    const stopTime = new Date('2018-07-29T03:24:45');
    const currentTime = new Date('2018-07-29T03:22:46');

    const timeStr = timer.getTimeRemaining(stopTime, currentTime);

    expect(timeStr).toEqual('01:59');
  });
});
