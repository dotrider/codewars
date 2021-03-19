
// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.

// If the input array is empty or null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

// FUNDAMENTALS ARRAYS LISTS DATA STRUCTURES ARITHMETIC MATHEMATICS ALGORITHMS NUMBERS


function countPositivesSumNegatives(input) {
    if(!input || input === null) return []
     
     let pos = 0;
     let neg = 0;
       
     input.forEach((n,i) => n > 0? pos++ : neg += Math.abs(n))
     
     if((!pos && !neg)) return []
     return [pos,-Math.abs(neg)]
   }