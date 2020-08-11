// In this Kata, you will be given a string and your task will be to return a list of ints detailing the count of uppercase letters, lowercase, numbers and special characters, as follows.

// Solve("*'&ABCDabcde12345") = [4,5,5,3]. 
// --the order is: uppercase letters, lowercase, numbers and special characters.
// More examples in the test cases.

// Good luck!


// FUNDAMENTALS




function solve(s){
    //..
     let upperCase = 0
     let lowerCase = 0
     let num = 0
     let sc = 0
     for(let i = 0; i < s.length; i++){
       
   
           if((s[i]).match(/[A-Z]/))
             upperCase++
           if((s[i]).match(/[a-z]/))
             lowerCase++
           if((/[0-9]/).test(s[i]))
             num++
           if((s[i]).match(/[^A-Za-z0-9]/))
             sc++
             
   
     }
     return [upperCase,lowerCase,num,sc]
   }