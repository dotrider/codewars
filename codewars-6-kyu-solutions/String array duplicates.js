
// In this Kata, you will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

// For example:

// dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].

// dup(["kelless","keenness"]) = ["keles","kenes"].

// Strings will be lowercase only, no spaces. See test cases for more examples.

// Good luck!

// If you like this Kata, please try:

// Alternate capitalization

// Vowel consonant lexicon

// ALGORITHMS STRINGS ARRAYS


function dup(s) {

    for(let i = 0; i < s.length; i++){
      for(let j = 0; j < s[i].length; j++){
        if(s[i][j] === s[i][j + 1]) s[i] = s[i].replace(/(.)\1+/g, '$1')
      }
    }
    
    return s
  };

