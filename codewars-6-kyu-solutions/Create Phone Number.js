
// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

// Example:
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge.
// Don't forget the space after the closing parentheses!

// ALGORITHMS ARRAYS STRINGS LOOPS CONTROL FLOWBASIC LANGUAGE FEATURES FUNDAMENTALS FORMATTING REGULAR EXPRESSIONS DECLARATIVE PROGRAMMING ADVANCED LANGUAGE FEATURES



function createPhoneNumber(numbers){
    let digits = numbers.join('').match(/^(\d{3})(\d{3})(\d{4})$/)
    return `(${digits[1]}) ${digits[2]}-${digits[3]}`
  }