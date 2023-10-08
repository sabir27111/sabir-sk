const accountID = 23556
let accountEmail = "sabir458@gmail.com"
var accountPassword = "sa1234"
accountCity = "kolkata"
let accountState; //that is not working because i am not use the value. just for investigation //


// accounID = 2 // not alloud

accountEmail = "jksdh@jjs.com"
accountPassword = " 356727"
accountCity = "Hydrabad"


console.log(accountID);

/* 
NOTE:
prefer not to use var
because of issue in block scope and functionalscope
*/

console.table([accountID, accountEmail, accountPassword, accountCity, accountState]);