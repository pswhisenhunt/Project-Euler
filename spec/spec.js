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

  describe('Largest Prime Factor', function() {
    it('should return the largest prime factor of a given number, n', function() {
      expect(ProjectEuler.largestPrimeFactor(13195)).toEqual(29);
      expect(ProjectEuler.largestPrimeFactor(25)).toEqual(5);
    });
  });

  describe('Largest Palindrome Product', function() {
    it('should return the largest palindrome of the product 2 numbers given of a specified digit', function() {
      expect(ProjectEuler.largestPalindromeProduct(2)).toEqual(9009);
      expect(ProjectEuler.largestPalindromeProduct(3)).toEqual(90909);
    });
  });

  describe('Sum of squares', function() {
    it('should return the difference of the sum of sqaures and the square of sums', function() {
      expect(ProjectEuler.differenceOfSumOfSquares(10)).toEqual(2640);
      expect(ProjectEuler.differenceOfSumOfSquares(100)).toEqual(25164150);
    });
  });

  describe('Summation of primes', function() {
    it('should return the sum of all primes below a given number', function() {
      expect(ProjectEuler.summationOfPrimes(10)).toEqual(17)
    });
  });

  describe('Sum of Exponents', function() {
    it('should be given a number, n, and return the sum of each number to the power of itself up to n', function() {
      expect(ProjectEuler.sumOfExponents(10)).toEqual(10405071317);
    });
  });
});
