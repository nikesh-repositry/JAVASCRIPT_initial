//                                                              FUNCTION                      node js_essentials/13function.js
//in order to use any set of code or logical operation many times in the program we declare a function to save time, resuability of code
//---------------------------------------------decalaration of function--------------------------------------------------------------------------------------------------------------------------
function function_name(){
    //code inside function
}
//parameter inside the function, parameters are the values assign to the function, use it when there is a need 
function function_Name(parameter1, parameter2){
    //code inside function
}
let var1 = function function3(){ //function can declare using variable
    //code
}












console.log("ways to create a function  & parametes arguments----------------------------------------------")
/* parameters are placeholders used when creating a function
   arguments are the actual values passed when calling a function
   parameters in a function is like local variable having block scope */
//default parameters
/* default parameters allow you to assign default values to function parameters
   if no value or undefined is passed fo that parameter when the function is called the default value is used instead  */   
function a5(name = "world"){
  console.log(`hello ${name}`)
} 
a5("you") //op hello you because "you" is a value it is not undedfined 
a5()  // op hello world because there is no value is provided so default parameter is used here
   //                                                      4 ways to create a function
//1. no parameters no return
//used for logging, timers, event handlers that do not need data, initializes modules
//pitfall = overusing side effects makes code harder to test-prefer returning values when possible
function a1(){
  console.log("way 1")
}
a1()

//2. no parameters with return
//used for configuration getters, cached values, factories that rely on closure state
//pitfall = hidden dependencies via closures can surprise readers-document what's captured
function a2(){
  return "way 2"
}
console.log(a2())

//3. with parameters no return
//used for updating UI, writing to files/db, emitting events, metrics
//pitfall = mutating inputs can cause unintended side effects- prefer returning new objects for predictability
function a3(para){
  console.log(para)
}
a3("way 3")

//4. with parameters with return
//used for business rules, data transformation, validators, formatters
//pitfall = returing inconsistent types(sometimes number, sometimes object) makes consumers fragils- keep return types predictable
function a4(para){
  return para
}
console.log(a4())













console.log("calling a function-----------------------------------------------------------------------------------")
/* function invocation 'calling of function'--------------------------------------------------------------------------------------------------------
When an event occurs (when a user clicks a button)
When it is invoked (called) from JavaScript code
Automatically (self invoked)
we use () operator to call or invoke any function and if we dont use it, then the name of func will only refers object or reference of it but not execute it */
function function4(){
    console.log("calling of function")
}
function4();  //execute the function
console.log(function4); //only refer to the function 

const factorial = function fac(n) {
    return n < 2 ? 1 : n * fac(n - 1);
  };
console.log(factorial(3)); // 6
  






//built-in function
/*parseInt and parseFloat are build in func
parseInt parse the string and return a integer  parseFloat parse the string and return a float-point num*/ 
let num1 = parseInt("10"); // Returns 10 (decimal)
let num2 = parseFloat("3.14"); // Returns 3.14
console.log("function hoisting-------------------------------------------------------------------------------------");








//function hoisting---------------------------------------------------------------------------------------------------------------------------------
console.log(square(5)); // 25
function square(n) {
  return n * n;
}
console.log(square(5));
//here in this example we revoke the square func twice one before and one after func initialization and it worked in both ways
//becz Function declarations are hoisted to the top of their scope, allowing them to be used before they're declared.but,
/*console.log(square(5)); // ReferenceError: Cannot access 'square' before initialization
const square = function (n) {
  return n * n;
}; */
//this code will throw error becz Function hoisting only works with function declarations — not with function expressions
console.log("nested function-------------------------------------------------------------------------------------");










//nested function----------------------------------------------------------------------------------------------------------------------------------
function addSquares(a, b) {
    function squares(x) {
      return x * x;
    }
    return squares(a) + squares(b);
  }
  
  console.log(addSquares(2, 3)); // 13
  console.log(addSquares(3, 4)); // 25
  console.log(addSquares(4, 5)); // 41
//addsquares takes two agrument and then nested square function takes one argument one by one first a and perform a*a then for b 
//and after addsquare returns sq a + sq b  
console.log("resursive function-------------------------------------------------------------------------------------");











//recursive function----------------------------------------------------------------------------------------------------------------------------------
//recursive function is that function which call itself during the excecution and non recursive doesn't call itself
//generally its better to use non recuresive func becz in recursive func there is a fear for the come up of stack overflow 
//which means when the input data is that big in which function have to call itself for like more then thousand times which is not optimized

//It is possible to convert any recursive algorithm to a non-recursive one,
//  but the logic is often much more complex, and doing so requires the use of a stack.
//In fact, recursion itself uses a stack: the function stack.
//  The stack-like behavior can be seen in the following example:
function foo(i) {
  if (i < 0) {
    return;
  }
  console.log(`begin: ${i}`);
  console.log(`end: ${i}`);
  
  foo(i - 1);
  console.log(`end2: ${i}`);
  
}
foo(3);
//why is the output is like this is becz when the foo is call with passed argument 3
//it first check if i is less then 0 and then return nothing back to the caller
//next if it is greater than 0 then first it will print begin and end sting statement but
//it will not print end2 along with begin and end statement becz 
//foo is being call recursively before the end2 statement so it will continue its printing
//after when the recursivness of the function ends here it end like 3-1 then 2-1 then 1-1 then 0-1 not execute
//and finally the end2 statement continues it printing as they stored in stack 

function news() {
  const name = "raja"
  let age = "20"
  return{
    one: function(){
      age--;
      console.log(`${name} your age in 2023 was ${age}`);
    },
    two: function(){
      age++;
      console.log(`${name} age in 2024 is ${age}`);
    },
    three: function(){
      age++;
      console.log(`${name} will be ${age} in 2025`);
      //these is implementation of module pattern using closure via a factory function
      /*factory function is a function which returns a new object everytime you call it
        module pattern is returning an object with methods that operates on private data actually its a way to encapsulate state and expose only the functionality you want */
    }
  }
}   
let call = news();
call.one();
call.two();
call.three();
/* this is example to understand the concepts and find 4 to 5 ways to 
get the same output as this using any concepts */
console.log("closure-------------------------------------------------------------------------------------");











//closure-------------------------------------------------------------------------------------------------------------------------------------------
/*javaScript allows for the nesting of functions and grants the inner function full access to all the variables and functions 
defined inside the outer function (and all other variables and functions that the outer function has access to).

However, the outer function does not have access to the variables and functions defined inside the inner function. 
This provides a sort of encapsulation for the variables of the inner function. */ 
function createCounter() {
  let count = 0;

  return function() {
    count++;
    return count;
  };
}

const counter1 = createCounter();
const counter2 = createCounter();

console.log(counter1()); // Output: 1
console.log(counter1()); // Output: 2 but why? because closure preserve the variable value between calls
console.log(counter2()); // Output: 1
console.log(counter2()); //2
console.log(counter2()); //3
console.log(counter1()); //3
/* The key reason count is not reset is that it is part of a closure. The closure retains access to the count variable 
in the environment of createCounter(), and this environment is preserved as long as the returned function (counter1) exists.
Each call to counter1 modifies the same retained count variable, so its value persists across calls.*/

/* If count were defined globally or as a local variable inside the inner function, it would reset on every call 
because a new execution context would be created each time.*/










console.log("this-------------------------------------------------------------------------------------");
//this keyword---------------------------------------------------------------------------------------------------------------------------------------------------
//this keyword refers to the object that the current function is a method of. Its value depends on how the function is called.
const person = {
  firstName: "Alice",
  lastName: "Johnson",
  fullName: function() {
      return this.firstName + " " + this.lastName;
  }
};
console.log(person.fullName()); // Output: Alice Johnson

//In the global context (outside of any object), this usually refers to the global object (window in browsers).
console.log(this); // Output: Window object
















console.log("arrow function------------------------------------------------------------------------------------")
//           arrow function
/* arrow function introduced in ES6 which provide a shorter syntax to write a function
in case if the function has only one line then you can omit the return and curly braces for example */
const mul = (a,b) => a*b;
mul(2,3) //6
/* lexical this binding: arrow function do not have their own this, they inherit it from
   the surrounding code. this is a lifesaver in react or when handling dom events and callbacks
arrow function is not suitable for methods or constructors they cannot be used with new also they do not have the arguments object    */
console.log(((x,y)=>x-y)(4,2)); //as an argument to another function
//the arrow function is used directly inside console.log
const a6 = (v,m)=>{
  const re = v**m;
  return re
}
console.log(a6(3,2))














console.log("anonymous function--------------------------------------------------------------------------")
//anonymous function are the function without any name. 
//in prod level it is rarely used alone they are usually assigned to a variable or passed as an argument or inline callbacks
//unlike regular function you cannot call them before they are defined means no hoisting
//ideal and common for callback function(func passed into another func like setTimeout or .map())
//can be function expression or arrow func
const a7 = function(para){
  return `hello ${para}`
}
console.log(a7("world"))
//function expression (anonymous func assigned to a variable)
setTimeout(function(){
  console.log("this ran after 5 seconds this is anonymous func code output")
},5000)
//used as a callback
















console.log("IIFE immediately invoked function expression------------------------------------------------------------");
//an iife is a function that runs immediately after it is defined
//it is wrapped in parentheses to tell the js engine to treat it as an expression, followed by () to execute it
//encapsulation data privacy: variables defined inside an IIFE cant be accessed from the outside. it creates a private scope and avoid polluting global namespaces or scope
//useful for initialization: run setup code once
//in prod level often used in library development or to create a "module" where you only expose what is necessary
// basic IIFE
(function() {
  const private = "i am hidden";
  console.log("IIFE runs immediately");
  console.log(private);
})();
// console.log(private) this is will through error as the variable private is hidden

//arrow IIFE
(()=>{
  console.log("arrow IIFE")
})();







//Function Invocation, Method Invocation, Event Handlers, Constructor Functions(where is use)
//Accessing Object Properties, Creating Chainable Methods, Event Handling, Constructor Functions(why to use)


//arror fun and rest opr & IIFE & getter and setter method
