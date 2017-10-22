const should = require('chai').should();

const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function() {
  it('should return fizz for multiples of 3', function() {
    const normalCases= [
      {num: 3, expected: 'fizz'},
      {num: 9, expected: 'fizz'},
      {num: 12, expected: 'fizz'}
    ];

    normalCases.forEach(function(input) {
      const answer = fizzBuzzer(input.num);
      answer.should.equal(input.expected);
    });
  });

  it('should return buzz for multiples of 5', function() {
    const normalCases= [
      {num: 5, expected: 'buzz'},
      {num: 10, expected: 'buzz'},
      {num: 20, expected: 'buzz'}
    ];

    normalCases.forEach(function(input) {
      const answer = fizzBuzzer(input.num);
      answer.should.equal(input.expected);
    });
  });

  it('should return buzz for multiples of 15', function() {
    const normalCases= [
      {num: 15, expected: 'fizz-buzz'},
      {num: 30, expected: 'fizz-buzz'},
      {num: 45, expected: 'fizz-buzz'}
    ];

    normalCases.forEach(function(input) {
      const answer = fizzBuzzer(input.num);
      answer.should.equal(input.expected);
    });
  });

  it('should return the number if not divisible by 3 or 5', function() {
    const normalCases= [
      {num: 11, expected: 11},
      {num: 23, expected: 23},
      {num: 4, expected: 4}
    ];

    normalCases.forEach(function(input) {
      const answer = fizzBuzzer(input.num);
      answer.should.equal(input.expected);
    });
  });

  it('should raise error if args not numbers', function() {
    const badInputs = ['a', '1', true];

    badInputs.forEach(function(input) {
      (function() {
        fizzBuzzer(input);
      }).should.throw(Error);
    });
  });
});