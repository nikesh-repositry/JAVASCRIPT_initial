//        node js_essentials/25modules/commonimport.js
//common js
// const n = require('./math.js')  //require used to import 
// console.log(n)       //{ name: ' nikesh ', age: 55 }
// console.log(n.name)  // nikesh
// console.log(n.age)   //55
// console.log(n.sum(10,20)) //30
//now here n.name, n.age is not very optimized way to use through the entire code 
//so we can use destructuring
const{name,age,sum}=require('./commonexport.js')
console.log(name)  // nikesh
console.log(age)   //55
console.log(sum(10,30)) //40














