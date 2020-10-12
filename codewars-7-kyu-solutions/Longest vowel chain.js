
// The vowel substrings in the word codewarriors are o,e,a,io. The longest of these has a length of 2. Given a lowercase string that has alphabetic characters only (both vowels and consonants) and no spaces, return the length of the longest vowel substring. Vowels are any of aeiou.

// Good luck!

// If you like substring Katas, please try:

// Non-even substrings

// Vowel-consonant lexicon

// FUNDAMENTALS STRINGS


function solve(s){
  
let cur = 0
let longest = 0
    
    for(let i = 0; i < s.length; i++) {
      if("aeiou".includes(s[i])) {
          cur++      
        if(cur > longest) {
          longest = cur
        }
      }else {
          cur = 0
      }
    }
    
    return longest                   
  
  }