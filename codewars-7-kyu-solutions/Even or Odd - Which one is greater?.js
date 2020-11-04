
// Given a string of numbers confirm whether the total of all the individual even numbers are greater than the total of all the indiviudal odd numbers. Always a string of numbers will be given.

// If the sum of even numbers is greater than the odd numbers return:

// 'Even is greater than Odd'

// If the sum of odd numbers is greater than the sum of even numbers return:

// 'Odd is greater than Even'

// If the total of both even and odd numbers are identical return:

// 'Even and Odd are the same'

// FUNDAMENTALS


function evenOrOdd(str) {
    console.log(str)
  
    let odd = str.split('').filter(n => n % 2 !== 0).reduce((acc, n) => acc += +n,0)
    
    let even = str.split('').filter(n => n % 2 === 0).reduce((acc, n) => acc += +n,0)
  
    
    if(odd > even){
      return 'Odd is greater than Even'
    }
    if(even > odd){
      return 'Even is greater than Odd'
    }
    if(odd === even){
      return 'Even and Odd are the same'
    }
  }