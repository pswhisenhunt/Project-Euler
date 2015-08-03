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
  }
}
