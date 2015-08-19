module.exports = {
  sumOfMultiplesOf3And5BelowN: function(n) {
    var i = 0;
    var sum = 0;
    while (i < n) {
      if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
      }
      i++
    }
    return sum;
  },

  evenFibonacciNumbers: function(n) {
    var totalSequence = this.fibonacciSequence(n);
    var sum = 0;
    var i = 0;
    while (i <= totalSequence.length) {
      if (totalSequence[i] % 2 === 0) {
        sum += totalSequence[i]
      }
      i++;
    }
    return sum;
  },

  fibonacciSequence: function(n) {
    var fibArray = [];
    var prevIndex1 = 0;
    var prevIndex2 = 1;
    for (var i = 0; i < n; i++) {
      var savePrevOne = prevIndex1; // 0, 1, 1, 2, 3
      prevIndex1 = prevIndex2; // 1, 1, 2, 3, 5
      prevIndex2 = prevIndex2 + savePrevOne; // 0+1=1, 1+1=2, 2+1=3, 3+2=5, 5+3=8
      fibArray.push(prevIndex2);
    }
    return fibArray;
  },

  largestPrimeFactor: function(n) {
    var i = 1;
    var primeFactors = [];
    while (i <= n) {
      if (n % i === 0) {
        if (this.checkPrime(i)) {
          primeFactors.push(i);
        }
      }
      i++
    }

    var greatestFactor = primeFactors[0];
    for (var j = 0; j <= primeFactors.length-1; j++) {
      if (greatestFactor < primeFactors[j]) {
        greatestFactor = primeFactors[j];
      }
    }
    return greatestFactor;
  },

  checkPrime: function(number) {
    if (number < 2) {
      return false;
    }
    for (var i = 2; i < number; i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  },

  largestPalindromeProduct: function(digits) {
    var startNumber = '';
    for (var i = 0; i < digits; i++) {
      startNumber += '9';
    }
    startNumber = Number(startNumber);
    for (var j = startNumber; j > 0; j--) {
      var product = startNumber * j;
      if (this.isPalindrome(product)) {
        return product;
      }
    }
  },

  isPalindrome: function(product) {
    // using built in methods, you can reverse and a string like so:
    // var reversedProduct = product.toString().split("").reverse().join("");
    // to gain a better understanding, I chose to do it by hand
    product = product.toString();
    var reversedProduct = '';
    for (var i = product.length-1; i >= 0; i--) {
      reversedProduct += product[i];
    }
    if (reversedProduct === product) {
      return true;
    } else {
      return false;
    }
  },

  differenceOfSumOfSquares: function(number) {
    var sumOfSquares = 0;
    var squareOfSum = 0;
    var sum = 0;
    var difference = 0;
    for (var i = 1; i <= number; i++) {
      var iSquared = i * i;
      sum += i;
      sumOfSquares += iSquared;
    }
    squareOfSum = sum * sum;
    difference = squareOfSum - sumOfSquares;
    return difference;
  },

  summationOfPrimes: function(number) {
    var sumOfPrimesBelowNumber = 0;
    for (var i = 0; i < number; i++) {
      if(this.checkPrime(i)) {
        sumOfPrimesBelowNumber += i;
      }
    }
    return sumOfPrimesBelowNumber;
  },

  sumOfExponents: function(number) {
    var sum = 0;
    for (var i = 1; i <= number; i++) {
      var exponent = Math.pow(i, i);
      sum += exponent;
    }
    return sum;
  }
}
