
// Given a mixed array of number and string representations of integers, add up the string integers and subtract this from the total of the non-string integers.

// Return as a number.

// FUNDAMENTALS STRINGS NUMBERS ARRAYS

function divCon(x){

    let str = 0
    let num = 0
    for(let i = 0; i < x.length; i++){
      if(typeof x[i] === 'number'){
        num += x[i]
      }else{
        str += +x[i]
      }
    }
    
    return num - str
  }