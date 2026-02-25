//common js
let name = ' nikesh '
// module.exports = name; //this syntax is used to export
//but only one module.export can be executed in one file of js
//but what if you want to export multi variable
//then use below way 
function sum(a,b){
    return a+b
}
let age = 55;
module.exports={
    name,
    age,
    sum,
};















