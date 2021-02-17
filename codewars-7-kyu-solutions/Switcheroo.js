
// Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

// Example:

// 'acb' --> 'bca'
// 'aabacbaa' --> 'bbabcabb'

// FUNDAMENTALS STRINGS

function switcheroo(x){
  
    let str = ''
    
    x.split('').forEach(e => str += e === 'a'? 'b' : e === 'b'? 'a' : e)
    return str
  }