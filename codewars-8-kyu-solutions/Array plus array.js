// I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.


// BUGSFUNDAMENTALSARRAYSNUMBERSBASIC LANGUAGE FEATURES




function arrayPlusArray(arr1, arr2) {
    let sum1 = 0;
    let sum2 = 0;
    
  for(let i = 0; i < arr1.length; i++){
    sum1= arr1[i] + sum1
  }
  for(let j = 0; j < arr2.length; j++){
    sum2 = arr2[j] + sum2
  //return here
 }
   return sum1 + sum2
 }
 
 console.log(arrayPlusArray(3,5))