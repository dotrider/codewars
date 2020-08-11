// Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

// Example:

// "riley" --> "Hello Riley!"
// "JACK"  --> "Hello Jack!"



// FUNDAMENTALSSTRINGS




var greet = function(name) {
    let str = name.toLowerCase().split(' ')
   .map(n => n[0].toUpperCase() + n.substr(1)).join('');
   
     return `Hello ${str}!`
  };