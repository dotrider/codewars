
// Implement a function that returns the minimal and the maximal value of a list (in this order).

// FUNDAMENTALS




function getMinMax(arr){
    const[min] = arr.sort((a, b) => a - b);
    const[max] = arr.sort((a, b) => b - a);
    return [min,max]
  };