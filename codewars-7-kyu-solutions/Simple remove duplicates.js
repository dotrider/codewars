
// In this Kata, you will remove the left-most duplicates from a list of integers and return the result.

// // Remove the 3's at indices 0 and 3
// // followed by removing a 4 at index 1
// solve([3, 4, 4, 3, 6, 3]); // => [4, 6, 3]
// More examples can be found in the test cases.

// Good luck!

// FUNDAMENTALS





function solve(arr){
    //..
  arr = arr.reverse()

  for(let i = 0; i < arr.length; i++){
    for(let j = arr.length -1; j > i; j--){
      if(arr[i] === arr[j]) arr.splice(j,1)
    }
  }
  return arr.reverse()
}

//

function solve(arr){
    return arr.filter((val,i) => {
    //   console.log('lastI', arr.lastIndexOf(val), 'i', i)
      return arr.lastIndexOf(val) == i
    });

}