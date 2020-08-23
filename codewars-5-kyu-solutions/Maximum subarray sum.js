
// The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

// maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// // should be 6: [4, -1, 2, 1]
// Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

// Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.

// FUNDAMENTALS ALGORITHMS LISTS DATA STRUCTURES DYNAMIC PROGRAMMING



var maxSequence = function(arr){
    // ...
    
    let current = 0
    let max = 0
    
    arr.forEach((n, i) => {
         current = Math.max(current + n, 0)
          max = Math.max(max, current)
    })
    return max
  }