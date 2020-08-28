
// For this Kata you will have to forget how to add two numbers together.

// The best explanation on what to do for this kata is this meme :




// In simple terms our method does not like the principle of carrying over numbers and just writes down every number it calculates.

// You may assume both integers are positive integers and the result will not be bigger than Integer.MAX_VALUE (only for java)

// ALGORITHMS ARITHMETIC MATHEMATICS NUMBERS


function add(num1, num2) {

    let arr = []
    
     const n1 = num1.toString().split('').reverse()
     const n2 = num2.toString().split('').reverse()
  
      const primary = n1.length > n2.length? n1 : n2 
      const secondary = n2.length < n1.length? n2 : n1
  
  
    for(let i = 0; i < primary.length; i++){
      if(!secondary[i]) secondary[i] = 0
    
        arr.unshift(+primary[i] + +secondary[i])
    }
  
    return +arr.join('')
  }