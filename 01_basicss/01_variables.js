const accountId = 636500
let accountEmail = "sujal@gmail.com"
var accountPassword ="2222"
accountCity="kota"
let accountState
// accountId=5 not allowes becs acoountId is constant
accountEmail = "suj@gmail.com"
accountPassword ="0202"
accountCity = "jaipur"
console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
/*
prefer not to use var. bcus of issue in block scope and functional scope
*/