

// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// FUNDAMENTALS STRINGS ARRAYS

function fakeBin(x){

    let binaryStr = ''
    
    for(let i = 0; i < x.length; i++){
      binaryStr += x[i] < 5? 0 : 1;
    }
    return binaryStr
  }