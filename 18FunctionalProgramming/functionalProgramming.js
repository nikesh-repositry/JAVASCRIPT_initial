//functional programming       node 16functionalProgramming.js




//1.PURE FUNCTION
console.log("1. pure function")
//write a func to calculate the total price of an item including tax
//simple js program impure
let taxRate = .2;
function calculateTax(price){
    return price*taxRate;
}
console.log(calculateTax(100)) //20
taxRate = .25
console.log(calculateTax(100)) //25  here the external state is changed as the function depends on an external changeable value
//pure function program
function measureTax(price,taxvalue){
    return price*taxvalue;
}
console.log(measureTax(100,.1));
console.log(measureTax(100,.1)) //so here the output only depends on the input 




//2.immutability
console.log("2. immutability")
//update an array without modifying the original
//simle program
const arr1 = [1,2,3];
arr1.push(4)
console.log(arr1)
//FP way
const arr2 = [...arr1,5,6]
console.log(arr2)




//3.DECLARATIVE PROGRAMMING
console.log('DECLARATIVE PROGRAMMING')
//double each number in the array
//simple program
const arr3 = [1,2,3]
const arr4 = []
for(let i=0; i<arr1.length-1;i++){
    arr4.push(arr3[i]*2)
}
console.log(arr4)
//FP way
console.log(arr3.map(i =>i*2)) //here you just decribe what to do now how to do




//4.AVOID SHARED STATE
console.log("AVOID SHARED STATE")
//sum two numbers without depending on shared variables
//simple program
let a1 = 10
function add1(y){
    return a1+y
}
console.log(add1(10))
//FP way
function add2(x,y){
    return x+y
}
console.log(add2(10,10)) //here you passed both the numbers none of it are global so nobody can change this variable




//5.AVOID SIDE EFFECTS
console.log("AVOID SIDE EFFECTS")
//a function which must not modify anything else outside itself
//simple program
function f1(a,b){
    console.log(a+b)
}
f1(2,3)
//FP program
function f2(a,b){
    return a+b
}
console.log(f2(2,4)) //here the func is just returning the value and not interaction with anything else




//6.REUSE/COMPOSE LOGIC    
console.log("REUSE/COMPOSE LOGIC")
//write a func that takes a username stirng, cleans it and formats it as uppercase as USER_username
//simple program
function f3(name){
    if(!name) return "INVALID"
    const a2 = name.trim()
    const a3 = a2.toUpperCase();
    return "USER_"+a3
}
console.log(f3("nikesh   "));
//FP program
const trim = name => name.trim();
const uper = trim => trim.toUpperCase();
const finl = uper => "USER_"+uper;
const f4 = (name)=>{
    if (!name) return "INVALID";
    return finl(uper(trim(name)))
}
console.log(f4("  nikesh  "));   //here each func are composed with each other not only one function doing all the operations




//7.DO NOT ITERATE
console.log("DO NOT ITERATE");
//get each elements in array be 10 times more than the original 
//simple program
const arr5 = [1,3,5]
const arr6 =[];
for(let i =0; i<arr1.length-1;i++){
    arr6.push(arr5[i]*10)
}
console.log(arr6)
//FP program
const arr7 = arr5.map(i=>i*10)
console.log(arr7) //not iterated here just do the given job




//8.LOOSE COUPLING
console.log("LOOSE COUPLING")
//make a notification system which must be loosey coupled
const user1 = {
    name : 'nikesh',
    mail : 'nikesh@mail.com',
    phone : 123456789,
}
function sendmail(user){
    console.log("mail sent to "+user.mail)
}
function sendsms(user){
    console.log("sms sent to "+ user.phone)
}
function send(user,func){
    func(user)
}
send(user1,sendmail)




//9.FIRST CLASS FUNCTION
console.log('FIRST CLASS FUNCTION')
//a program where a function can be stored in variables, passed or returned
const a = (name)=>{console.log(`hello ${name}`)}
function b(fn,naam){return fn(naam)}
b(a,"nikesh") //in this program the function is saved in a variable and func is passed and returned also




//10.HIGHER ORDER FUNCTION
console.log('HIGHER ORDER FUNCTION')
//build a higher order mapper that accepts any transform function
const aa = (arr,fun)=>{return arr.map(fun)};
// const aa = (arr, fun) => arr.map(fun);  here no return is written because no use of {} braces if it use then must to write the word return 
const ab = aa([2,6],x=>x*x)
console.log(ab)




//11.FUNCTION COMPOSITION
console.log('FUNCTION COMPOSITION')
//find the double of the square of a digit
// const b3 = (f,g)=>x=>f(g(x));
const b1 = x=>x*2;
const b2 = x=>x*x;
const b3 = (f,g)=>x=>f(g(x));
const b4 = (b3(b2,b1))
const b5 = (b4(2))
console.log(b5)




//12.AVOID MUTATION WITH SPREAD AND REST OPERATOR
console.log("AVOID MUTATION WITH SPREAD AND REST OPERATOR")
//add new property to object without changing original
const user = { name: "Nikesh", age: 21 };
const updated = { ...user, age: 22 };

console.log(user); // {name:"Nikesh", age:21}
console.log(updated); // {name:"Nikesh", age:22}




//17.BUILT IN FUNCITONS
//1. .map() method
//write a program to double the elements of a array
//using named function
const arr9 = [1,2,3,4];
const a13 = arr9.map(function(currentvalue, index, array){
    return `${currentvalue} currentvalue ${index} index ${array} array`
})
console.log(a13);
//using arrow function
const a14 = arr9.map((currentvalue, index, array)=>{
    return `${currentvalue} currentvalue ${index} index ${array} array`
})
console.log(a14)
//arrow function short code most practiced way
const a15 = arr9.map(i=>i*2) //if you add {} outside of i*2 then you have to write the word return otherwise this is the way
console.log(a15)
