// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

// For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.



// FUNDAMENTALS




const quarterOf = (month) => {
    // Your code here
    if((/[4-6]/).test(month)){
    return 2
    }else if((/[7-9]/).test(month)){
    return 3
    }else if((/^1[0-12]/g).test(month)){
    return 4
    }else
    return 1
  }