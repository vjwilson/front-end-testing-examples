# front-end-testing-examples

This is sample code from a talk given at the CharlotteJS meetup, ["How Testing Can Help You Write Better JavaScript"](https://www.meetup.com/CharlotteJS/events/254410581/), on Sept. 20, 2018.

It illustrates how to test a simple function.

## Requirements for the function to test
Given a current time and an end time, return a string with the remaining minutes and seconds.

1. Both times will be JavaScript Date object.
2. The current time will never be more than 1 hour before the end time, but may be the same or after.
3. The remaining time should always have 2 digits for both minutes and seconds, even if they are less than 10.

## Testing Examples

### Vanilla JS

This is the file at the root of the repo, `countdown.js`. It has the function and the tests in the same file. You can run the tests with [Node](https://nodejs.org), or use an inline evaluation tool, like [QuokkaJS](https://quokkajs.com/).

### Jest

To see either example with a testing framework, run `npm install`. Then, you can run `jest` to see the output of the test file `countdown.spec.js` in the `spec/` directory.

### Jasmine

To see either example with a testing framework, run `npm install`. Then, you can run `jasmine` to see the output of the test file `countdown.spec.js` in the `spec/` directory. (Jest and Jasmine use very similar paradigms, and many features of their tests are interchangeable.)

### Importing the file to test

In the most recent code on the master branch of this repo, the function to test is imported into the test file using Node (CommonJS) style export and import. To see earlier versions, where the function was in the same file as the tests, as in the vanilla JS example, check out the Git tags, `jest` or `jasmine`.

## Slides

The s[lides for the presentation](https://speakerdeck.com/vjwilson/how-testing-can-help-you-write-better-javascript) are available on Speaker Deck.
