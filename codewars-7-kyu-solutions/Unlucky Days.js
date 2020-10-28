
// Friday 13th or Black Friday is considered as unlucky day. Calculate how many unlucky days are in the given year.

// Find the number of Friday 13th in the given year.

// Input: Year as an integer.

// Output: Number of Black Fridays in the year as an integer.

// Examples:

// unluckyDays(2015) == 3
// unluckyDays(1986) == 1
// Note: In Ruby years will start from 1593.

// FUNDAMENTALS DATES/TIME


function unluckyDays(year){
    //your code here
    let count = 0
    
    for(let m = 1; m <= 12; m++){
        let date = new Date(m + "/13/" + year)
        if(date.getDay() === 5) count++
    }
    
    return count
  }