// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

// FUNDAMENTALS STRINGS

function reverseWords(str) {
  let newStr = str.split(' ').reverse().join(' ')
  let revStr = ''
  for(let i = newStr.length -1; i >=0 ; i--){
    revStr += newStr[i]
  }
  return revStr

}