
// Your task is to remove all consecutive duplicate words from string, leaving only first words entries.

// Example:

// Input:

// 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

// Output:

// 'alpha beta gamma delta alpha beta gamma delta'

// ALGORITHMS STRINGS REGULAR EXPRESSIONS DECLARATIVE PROGRAMMING ADVANCED LANGUAGE FEATURES FUNDAMENTALS

const removeConsecutiveDuplicates = s => {
  
    s = s.split(' ')
    let str = ''
    
    for(let i = 0; i < s.length; i++){
      if(s[i] !== s[i + 1]) str += `${s[i]} `
    }
    return str.trim()
  }