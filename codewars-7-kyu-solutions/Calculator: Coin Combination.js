// The function takes cents value (int) and needs to return the minimum number of coins combination of the same value.

// The function should return an array where
// coins[0] = pennies ==> $00.01
// coins[1] = nickles ==> $00.05
// coins[2] = dimes ==> $00.10
// coins[3] = quarters ==> $00.25

// So for example:
// coinCombo(6) --> [1, 1, 0, 0]



// ALGORITHMSNUMBERSFUNDAMENTALS




var coinCombo = function(cents) {
    let coins = [0,0,0,0]
   
     coins[3] = Math.floor(cents/25)
     cents = cents % 25;
   
     coins[2] = Math.floor(cents/10)
     cents = cents % 10;
    
     coins[1] = Math.floor(cents/5)
     cents = cents % 5;
   
     coins[0] = cents;
     return coins;
   }