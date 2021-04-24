
// Collect|
// Find the sum of the digits of all the numbers from 1 to N (both ends included).

// Examples
// # N = 4
// 1 + 2 + 3 + 4 = 10

// # N = 10
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + (1 + 0) = 46

// # N = 12
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + (1 + 0) + (1 + 1) + (1 + 2) = 51

// ALGORITHMS NUMBERS ARITHMETIC MATHEMATICS

function twistedSum(n) {
  let sum = 0;

  for (let i = 0; i <= n; i++) {
    if (i >= 10) {
      strNumArr = i.toString().split("");
      for (let j = 0; j < strNumArr.length; j++) {
        sum += +strNumArr[j];
      }
    } else {
      sum += i;
    }
  }

  return sum;
}
