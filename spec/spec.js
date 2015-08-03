var ProjectEuler = require('./../project-euler-challenges');

describe('Project Euler Challenges', function() {
  describe('Sum Of multiples of 3 and 5', function() {
    it('should return the sum of all multiples of 3 or 5 below given number, n', function() {
      var n = 10;
      expect(ProjectEuler.sumOfMultiplesOf3And5BelowN(n)).toEqual(23);
      n = 1000;
      expect(ProjectEuler.sumOfMultiplesOf3And5BelowN(n)).toEqual(233168);
    });
  });

  describe('Even Fibonacci numbers', function() {
    it('should return the sum of the even-valued Fibonacci numbers up to given number, n.', function() {
      expect(ProjectEuler.evenFibonacciNumbers(8)).toEqual(44);
    });
  });
});
