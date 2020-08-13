// Write simple .camelCase method (camel_case function in PHP, CamelCase in C# or camelCase in Java) for strings. All words must have their first letter capitalized without spaces.

// For instance:

// "hello case".camelCase() => HelloCase
// "camel case word".camelCase() => CamelCaseWord
// Don't forget to rate this kata! Thanks :)


// ALGORITHMSFUNDAMENTALSSTRINGS


String.prototype.camelCase=function(text){
    return this.split(' ').map(w =>  w.charAt(0).toUpperCase() + w.slice(1)).join('');
  }