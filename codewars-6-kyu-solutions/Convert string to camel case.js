// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

// Examples
// toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"

// toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"


// ALGORITHMSREGULAR EXPRESSIONSDECLARATIVE PROGRAMMINGADVANCED LANGUAGE FEATURESFUNDAMENTALSSTRINGS



function toCamelCase(str){
    if(!str) return str
    let s = str.replace(/[^a-zA-Z ]/g, " ")
    let final = s.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('')
  
    return str[0] + final.substring(1)
  }