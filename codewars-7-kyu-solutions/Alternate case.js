// Write function alternateCase which switch every letter in string from upper to lower and from lower to upper. E.g: Hello World -> hELLO wORLD



// FUNDAMENTALS





function alternateCase(s) {
    let str = ''
  
    for(let i = 0; i < s.length; i++){
    s[i] === s[i].toLowerCase() ? str += s[i].toUpperCase() : str += s[i].toLowerCase()
    }
    return str
  }
  
  alternateCase("HELLO world")