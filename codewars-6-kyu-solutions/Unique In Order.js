// Implement the function unique_in_order which takes as argument a sequence 
// and returns a list of items without any elements with the same value next to each other 
// and preserving the original order of elements.

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]


// FUNDAMENTALSADVANCED LANGUAGE FEATURESALGORITHMS


var uniqueInOrder=function(iterable){
    let result = [];
  
    for(i = 0; i < iterable.length; i++){
    let step1 = iterable[i];
    let step2 = iterable [i + 1];
     if (step1 !== step2){
     result.push(step1)
      }
    }
    return result
  }