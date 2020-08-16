
// Kevin is noticing his space run out! Write a function that removes the spaces from the values and returns an array showing the space decreasing. For example, running this function on the array ['i', 'have','no','space'] would produce ['i','ihave','ihaveno','ihavenospace'].


// FUNDAMENTALS




function spacey(array){
    let arr = []
    let i = 0
    while(i < array.length){
      arr.push(array.slice(0,i+1).join(''))
      i++   
    }
    return arr
}