
// You have a string of numbers; starting with the third number each number is the result of an operation performed using the previous two numbers.

// Complete the function which returns a string of the operations in order and separated by a comma and a space, e.g. "subtraction, subtraction, addition"

// The available operations are (in this order of preference):

// 1) addition
// 2) subtraction
// 3) multiplication
// 4) division
// Notes:

// All input data is valid
// The number of numbers in the input string >= 3
// For a case like "2 2 4" - when multiple variants are possible - choose the first possible operation from the list (in this case "addition")
// Integer division should be used
// Example
// "9 4 5 20 25"  -->  "subtraction, multiplication, addition"
// Because:

// 9 - 4 = 5   --> subtraction
// 4 * 5 = 20  --> multiplication
// 5 + 20 = 25 --> addition
// ALGORITHMS NUMBERS STRINGS LISTS DATA STRUCTURES



function sayMeOperations(str) {
  
    let s = ''
    str = str.split(' ')
    for(let i = 2; i < str.length; i++){
        
      let [curr, next, total ] = [ +str[i - 2], +str[i - 1], +str[i] ]
  
       if(curr + next === total){
         s += 'addition, '
         continue;
       }if(curr - next === total){
         s += 'subtraction, '
         continue;
       }if(curr * next === total){
         s += 'multiplication, '
         continue;
       }
         s += 'division, '
         continue;
    }
    
    return s.replace(/,\s*$/, "")  
  
  }