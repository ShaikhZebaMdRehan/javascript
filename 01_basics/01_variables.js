const accountId = 12345;
let accountEmail = "john@gmail.com";
var accountPassword = "45321";
accountCity = "Jaipur";

/* accountId = 2; */ // Value will not change br=ecause of const variable and it will give error

console.log(accountId);

/* Prefer not to use var variable because of issue in block scope and functional scope */

/* Change the value of all these variable it will change the value */
accountEmail = "johndoe@gmail.com";
accountPassword = "5";
accountCity = "Bengaluru";
let accountState; // Now add one more variable name state nut state will change that;s why we use let variable ( accountState will print undefined because we not assign a value of state ) 

/* print all the outputs in one command and output will come in TABULAR FORM */
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
