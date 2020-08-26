
// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

// FUNDAMENTALS ARRAYS NUMBERS




function positiveSum(arr) {
   
    return arr.reduce((acc, num) => {
      if(num > 0){
        return acc += num
      }
      return acc
    },0)
  }