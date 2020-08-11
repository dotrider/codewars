// Your task is to write a function, which takes two arguments and returns a sequence. First argument is a sequence of values, second is multiplier. The function should filter all non-numeric values and multiply the rest by given multiplier.

// ALGORITHMSARRAYS




function multiplyAndFilter(array, multiplier){
    // your code
   return newArr = array.filter(n => n === 0 || n === +n).map(n => n * multiplier)
  }