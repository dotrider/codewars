
// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

// FUNDAMENTALS STRINGS ASCII CHARACTER ENCODINGS FORMATS

function count (str) {  
  
    if(!str) return {}
  
    let obj = {}
  
    for( let e of str){
      (obj.hasOwnProperty(e))? obj[e]++ : obj[e] = 1;  
     }
   
     return obj;
  }