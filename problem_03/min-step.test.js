const { expect } = require('chai');
const { minStep } = require('./index');

describe('Problem 03 - min-step', () => {
  const testcases = [
    {
      input: 3,
      expected: 2
      // 3 > 2 > 1
    },
    {
      input: 15,
      expected: 5
      // 15 > 16 > 8 > 4 > 2 > 1
      // 16 = 1/2 = 0.5
      // 8 = 7
      // +
    },
    {
      input: 16,
      expected: 4
      // 16 > 8 > 4 > 2 > 1
    },
    {
      input: 31,
      expected: 6
      // 31 > 32 > 16 > 8 > 4 > 2 > 1
      // 31 > 30 > 15 > 14 > 7 > 6 > 3 > 2 > 1
      // 32 = 1/2 = 0.5
      // 16 = 15
      // +
    },
    {
      input: 33,
      expected: 6
      // 33 > 32 > 16 > 8 > 4 > 2 > 1
      // 33 > 34 > 17 > 16 > 8 > 4 > 2 > 1
      // 64 = 31/2 = 15.5
      // 32 = 1
      // -
    },
    {
      input: 35,
      expected: 7
      // 35 > 34 > 17 > 16 > 8 > 4 > 2 > 1
      // 35 > 36 > 18 > 9 > 8 > 4 > 2 > 1
      // 64 = 29/2 = 14.5
      // 32 = 3
      // -
    },
    {
      input: 47,
      expected: 7
      // 47 > 48 > 24 > 12 > 6 > 3 > 2 > 1
      // 47 > 46 > 23 > 22 > 11 > 10 > 5 > 4 > 2 > 1
      // 64-47 = 17/2 = 8.5
      // 47-32 = 15/2 = 7.5
      // +
    },
    /* { // check wrong
      input: 5,
      expected: 5
      // 5 > 4 > 2 > 1
    }, */
    {
      input: 5,
      expected: 3
      // 5 > 4 > 2 > 1
    },
    {
      input: 23,
      expected: 6
      // 23 > 24 > 12 > 6 > 3 > 2 > 1 {6}
      //#1 23 > 22 > 11 > 12 > 6 > 3 > 2 > 1 {7}
      //#2 23 > 22 > 11 > 10 > 5 > 6 > 3 > 2 > 1 {8}
      //#3 23 > 22 > 11 > 10 > 5 > 4 > 2 > 1 {7}
    }
  ];
  testcases.forEach(tc => {
    it(`${tc.input} => ${tc.expected}`, () => {
      const result = minStep(tc.input);
      expect(result).to.be.eq(tc.expected);
    });
  });
});
