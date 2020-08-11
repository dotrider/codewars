// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

// Your task is to write a function maskify, which changes all but the last four characters into '#'.

// Examples
// maskify("4556364607935616") == "############5616"
// maskify(     "64607935616") ==      "#######5616"
// maskify(               "1") ==                "1"
// maskify(                "") ==                 ""

// // "What was the name of your first pet?"
// maskify("Skippy")                                   == "##ippy"
// maskify("Nananananananananananananananana Batman!") == "####################################man!"



// ALGORITHMSUTILITIESSTRINGS




// return masked string
function maskify(cc) {
    if(cc.length < 4)return cc
      
    let s = cc.split('') 
    let arr = []
      for(let i = 0; i < s.length; i++){
        if(i < s.length - 4){
          s.splice(i,1,'#')
        }
        arr.push(s[i])
      }
    return arr.join('')
    }