
// Your task is to write function factorial.

// https://en.wikipedia.org/wiki/Factorial

// FUNDAMENTALS

function factorial(n){
    //your code here
    return (n <= 1)? 1 : n * factorial(n - 1);
  }