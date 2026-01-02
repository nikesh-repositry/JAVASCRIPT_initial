//                                    OPERATORS
//js has varieties of operators to perform various operations on variable and values

//ARITHMETIC OPERATORS
//these operators are used to perform arithmetic operations
let a=Number(7);
let b=4;
console.log(a+b);//simple addition
console.log(a-b);//simple substraction
console.log(a*b);//simple multiplication
console.log(a/b);//simle division
console.log(a%b);//modulus it returns the remainder
console.log(a**b);//this is not an arithmetic operator but it is used to find power of number
console.log(" assignment operator-----------------------------------------------------------------------");

//ASSIGNMENT OPERATORS                                       MOEE IN ASSIGNMENT OPERATORS IN W3S
//these operators are used to assign values to variable
let x=4;        //= used to assign value
console.log(x);
x+=4;           //x+=4 is equal to x=x+4
console.log(x); //8
x-=4;           //x -= y (equivalent to x = x - y)
console.log(x); //4
x*=4;           //x *= y (equivalent to x = x * y)
console.log(x); //16
x/=4;           //x /= y (equivalent to x = x / y)
console.log(x); //4
x%=3;           //x %= y (equivalent to x = x % y) this is remainder
console.log(x); //1   node 7operators.js
console.log(x**=2) //1 (power of x to 2)
x=5 //reassigned the value x for further operations
console.log(x<<=1)
console.log("comparison operator-----------------------------------------------------------------------");

//COMPARISON OPERATORS
//these operators are used to compare values
let u="2";
let v=2;
console.log(u==v);   //equal to (loose and type conversion allowed which means 5=="5" is true)
console.log(u===v);  //strict equal to (value and type) 5==="5" is false
console.log(u!=v);   //not equal to 
console.log(u!==v);  //strict not equal to (value and type)
console.log(u>v);    //greater than
console.log(u<v);    //less than
console.log(u>=v);   //greater then or equal to 
console.log(u<=v);   //less than or equal to 
console.log("string operator------------------------------------------------------------------------");

//STRING OPERATORS
//the + operator is used to concatenate strings
let str1="nikesh";
let str2="kumar";
let result = str1 + " " + str2; //concatenation 
console.log(result);
console.log(str1+=str2) //it actually append the string
console.log("logical operator_______________________________________________________________________")

//LOGICAL OPERATORS
//these operators are used to combine conditional statements
let o=2;
let p=4;
let israining=false;
if((o && p)>0)                //logical AND if both true it is true or proceed futher 
    console.log("yes there");
if((o || p )==2)              //logical OR if any of true it will true of proceed further
    console.log("yes once ");
if(!israining)                //logical NOT
    console.log("whether is ok now");  
console.log(!israining)     //true
console.log(!!israining)     //false
console.log(!o)    //this is the inverter where this first convert the value into boolean and then return the opposite boolean value
//single ! is used to check if something does not exist
console.log(!!o); //this return the actual boolean value . first the inverter happens and then flip it back to its original truthiness
//double !! is used when you want to convert the value into a pure true of false value
//double not is generally used to convert any value into a boolean
// logical NOT operator (!) is used to reverse the Boolean value of an expression. If the expression is true, ! will make it false, and if it’s false, ! will make it true.

console.log("short circuit -------------------------------------------------------------------------------------------------------------------------------------------------------")
//short circuit concept
// && → returns the first falsy value, or the last truthy value if none are falsy.
console.log(0n && 1) //false and true 
//if first is false and second is true then return false = 0n
console.log(57 && "urine") //true and true 
//if both are true then return second true = urine
console.log(false && 0) //false and false 
//if both are false then return first false = false
console.log(44 && false) //true and false 
//if first is true and second is false then return false = false

// || → returns the first truthy value, or the last falsy value if none are truthy.
console.log(0n || 1) //false and true
//if first is false and second is true then return true = 1
console.log(57 || "urine") //true and true
//if both are true then it returns first true = 57
console.log(false || 0) //false and false
//if both are false then it returns second false = 0
console.log(44 || false) //true and false
//if first is true and second is false then return true = 44
console.log("-------------------------------------------------------------------------");

//BITWISE OPERATORS---------
