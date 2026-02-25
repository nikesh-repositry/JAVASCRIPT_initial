//            node js_essentials/25modules/es6import.js
import obj, { divide } from './es6export.js'; //default modules es6 but the {divide} is named export of es6 module
import {sub as minus,modulo} from './es6export.js' //proper named module of es6


//es6 default export and import modules
const { sum: add, mul: product } = obj; //renaming via destructuring
console.log(add(10,20))    //30
console.log(product(30,2)) //60



console.log(minus(50,20))     //30
console.log(modulo(6661,10))//1
console.log(divide(50,2))   //25