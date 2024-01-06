const accountId="12";
var userName="abc";
let email="pallavi@google.com";
city="Dehradun";  // this is also possible but should never be used
let accountState;    // will give output undefined

/*
prefer not to use var because of issues in block scope and functional scope
*/


// accountId ="10"; // not allowed
userName="xyz";
email="pall.google.com";
city ="mussoorie";

// console.log(accountId);
// console.log(userName);
// console.log(email);;

console.table([accountId,userName,email,city,accountState]);