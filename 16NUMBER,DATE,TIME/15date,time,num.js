console.log("NUMBERS+++++++++++++++++++++");
//CREATING NUMBER INSTANCE
//1. Using Number() function
let num1 = Number(123);
console.log(num1); //123
console.log(typeof num1); //number

//2. Using numeric literal
let num2 = 456;
console.log(num2); //456
console.log(typeof num2); //number

//3. Using new Number() constructor
let num3 = new Number(789);
console.log(num3); //[Number: 789]
console.log(typeof num3); //object
//Note: num3 is an object, not a primitive number

//NUMBER METHODS
//TWO METHODS ONE IS INSTANCE METHID AND OTHER IS STATIC METHOD
//1.STATIC METHOD
console.log("STATIC METHODS+++++++++++++++++++++");
let num4 = 123.456;
console.log(Number.isFinite(num4)+' isFinite'); //true if num4 is a finite number
console.log(Number.isInteger(num4)+' isInteger'); //false if num4 is not an integer
console.log(Number.isNaN(NaN)+' isNaN'); //true if the value is NaN
console.log(Number.isSafeInteger(num4)+' isSafeInteger'); //false if num4 is not a safe integer
console.log(Number.parseInt("100px")+' parseInt'); //100
console.log(Number.parseFloat("12.34em")+' parseFloat');
//2.INSTANCE METHODS
console.log("INSTANCE METHODS+++++++++++++++++++++");
let num5 = 987.654321;
console.log(num5.toExponential(5)+' toExponential'); //5 significant digits after decimal
console.log(num5.toFixed(2)+' toFixed'); //2 digits after decimal only
console.log(num5.toPrecision(7)+' toPrecision'); //7 significant digits
console.log(num5.toString(10)+' toString'); //default base 10 and write 2 instead of 10 and it will be binary also we can write any base from 2 to 36
console.log(num5.valueOf()+' valueOf'); //primitive value of num5   
console.log(num5.toLocaleString('en-IN') + ' toLocaleString');  // "12,34,567.89 formatted according to locale 

//NUMBER PROPERTIES
console.log("NUMBER PROPERTIES+++++++++++++++++++++");
console.log(Number.MAX_VALUE+' MAX_VALUE'); //largest representable number
console.log(Number.MIN_VALUE+' MIN_VALUE');  //smallest representable number
console.log(Number.MAX_SAFE_INTEGER+' MAX_SAFE_INTEGER'); //largest safe integer which means it can be represented accurately
console.log(Number.MIN_SAFE_INTEGER+' MIN_SAFE_INTEGER'); //smallest safe integer which means it can be represented accurately
console.log(Number.NaN+' NaN'); //Not a Number value 
console.log(Number.NEGATIVE_INFINITY+' NEGATIVE_INFINITY'); //represents negative infinity
console.log(Number.POSITIVE_INFINITY+' POSITIVE_INFINITY'); //represents positive infinity
console.log(Number.EPSILON+' EPSILON'); //smallest difference between two representable numbers
console.log(Number.prototype+' prototype'); //prototype of Number object
console.log("=============================");   
