
// Impliment the reverse function, which takes in input n and reverses it. For instance, reverse(123) should return 321. You should do this without converting the inputted number into a string.

// FUNDAMENTALS RECURSION ALGORITHMS COMPUTABILITY THEORY THEORETICAL COMPUTER SCIENCE FUNCTIONS CONTROL FLOW BASIC LANGUAGE FEATURES

  let reversed = 0

  while (n > 0) {
      reversed *= 10
      reversed += n % 10
      n -= n % 10
      n /= 10
  }

  return reversed