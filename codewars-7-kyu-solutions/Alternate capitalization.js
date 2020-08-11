// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

// Good luck!

// If you like this Kata, please try:

// Indexed capitalization

// Even-odd disparity



// FUNDAMENTALSSTRINGS




function capitalize(s){

    let arr = s.split('').map((e, i) => i % 2 === 0 ?
          e.toUpperCase() : e.toLowerCase()
    ).join('')
    let arr2 = s.split('').map((e, i) => i % 2 !== 0 ?
          e.toUpperCase() : e.toLowerCase()
    ).join('')
    
      return [arr, arr2]
    };