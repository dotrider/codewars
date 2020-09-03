
// Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

// Write a function which takes a list of strings and returns each line prepended by the correct number.

// The numbering starts at 1. The format is n: string. Notice the colon and space in between.

// Examples:

// number([]) // => []
// number(["a", "b", "c"]) // => ["1: a", "2: b", "3: c"]
// FUNDAMENTALS ARRAYS ITERATORS CONTROL FLOW OBJECT-ORIENTED PROGRAMMING BASIC LANGUAGE FEATURES



var number=function(array){
    //your awesome code here
  
    if(array.length < 1) return array
    let arr = []
    
    
    for(let i = 0; i < array.length; i++){
        let item = array[i]
        
         arr.push(`${i + 1}: ${item}`)      
    }
    
    return arr
  }