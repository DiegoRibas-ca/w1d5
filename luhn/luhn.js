function checkLuhn(luhn) {
    var luhnArr = luhn.toString().split("")
    // console.log(luhnArr)
    var sum = 0;
    var nDigits = luhnArr.length;
    var parity = nDigits % 2;
    for (var i = 0; i < nDigits; i++) {
        console.log(luhnArr[i])
        var digit = parseInt(luhnArr[i]);
        if (i % 2 === parity) {
            digit = digit * 2;
            if (digit > 9) {
                digit = digit - 9;
            }
        }
        sum = sum + digit;
    }
    console.log(sum)
    return (sum % 10) === 0
}

console.log(checkLuhn(79927398713))



  // 1212 (parity of number of digits is even pick the even index)

  128889
  1281689
  128789


  // function random(arg){

  //   console.log("I AM THE FUNCTION THAT TAKES A NUMBER AND RETURN THE RESULT OF WHAT I WANT TO DO")

  //   var type = "WHAT I WANT TO RETURN"

  //   return typr
  // }

  // function