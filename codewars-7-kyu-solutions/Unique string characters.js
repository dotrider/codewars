// In this Kata, you will be given two strings a and b and your task will be to return the characters that are not common in the two strings.

// For example:

// solve("xyab","xzca") = "ybzc" 
// --The first string has 'yb' which is not in the second string. 
// --The second string has 'zc' which is not in the first string. 
// Notice also that you return the characters from the first string concatenated with those from the second string.

// More examples in the tests cases.

// Good luck!

// Please also try Simple remove duplicates



// FUNDAMENTALSSTRINGS




function solve(a,b){

    let newArr = []
    let na = a.split('')
    let nb = b.split('')
  
    for (let i = 0; i < na.length; i++){
       if(!nb.includes(na[i]))
        newArr.push(na[i])
    }
    for (let j = 0; j < nb.length; j++){
       if(!na.includes(nb[j]))
        newArr.push(nb[j])
    }
    return newArr.join('')
  };