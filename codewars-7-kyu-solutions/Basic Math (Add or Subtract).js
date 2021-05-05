
// In this kata, you will do addition and subtraction on a given string. The return value must be also a string.

// Note: the input will not be empty.

// Examples
// "1plus2plus3plus4"  --> "10"
// "1plus2plus3minus4" -->  "2"

// FUNDAMENTALS STRINGS

function calculate(str) {
    //your code here...
    let arr = str.split(/(\d+)/)
    
    let resStr = ''
    for(let i = 0; i < arr.length; i++){
      if(arr[i] === 'plus'){
        arr[i] = '+'
        resStr += arr[i]
      }else if(arr[i] === 'minus'){
        arr[i] = '-'
        resStr += arr[i]
      }else {
        resStr += arr[i]
      }
      
    }
    
    return `${eval(resStr)}`
    }