// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// Patrick Feeney => P.F



// FUNDAMENTALSSTRINGSARRAYS




function abbrevName(name){
    let n = name.toUpperCase().split(' ')
    let initials = []
    // console.log(init)
    for(let i = 0; i < n.length; i++)
      // console.log(n[i][0])
      initials.push(n[i][0])
    return initials.join('.')
  
  }