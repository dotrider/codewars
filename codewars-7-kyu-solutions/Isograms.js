// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// isIsogram("Dermatoglyphics") == true
// isIsogram("aba") == false
// isIsogram("moOse") == false // -- ignore letter case



// FUNDAMENTALSSTRINGS




function isIsogram(str){
    let s = str.toLowerCase().split('')
    
    for(let i = 0; i < s.length; i++){
      for(let j = s.length-1; j > i; j--){
        if(s[i] === s[j]) return false
      }
    }
    return true
  }