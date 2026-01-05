//                                    OPERATORS
//js has varieties of operators to perform various operations on variable and values

//                                                           ARITHMETIC OPERATORS
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











//                                                               ASSIGNMENT OPERATORS MOEE IN ASSIGNMENT OPERATORS IN W3S
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
x = 5; // reset for bitwise ops

x <<= 1;  // Left shift and assign → x = x << 1 (shift bits left, multiply by 2)
console.log("After <<= :", x);  // 10

x >>= 1;  // Right shift and assign → x = x >> 1 (shift bits right, divide by 2, keep sign)
console.log("After >>= :", x);  // 5

x >>>= 1; // Unsigned right shift and assign → x = x >>> 1 (shift bits right, fill with zeros)
console.log("After >>>= :", x); // 2

x &= 1;   // Bitwise AND and assign → x = x & 1 (keep only common 1 bits)
console.log("After &= :", x);   // 0

x ^= 1;   // Bitwise XOR and assign → x = x ^ 1 (1 if bits differ)
console.log("After ^= :", x);   // 1

x |= 1;   // Bitwise OR and assign → x = x | 1 (1 if either bit is 1)
console.log("After |= :", x);   // 1
console.log("comparison operator-----------------------------------------------------------------------");









//                                                            COMPARISON OPERATORS
//these operators are used to compare values
//     relational operator is the subset of comaparison operator the relational operator compares relative values (greater, smaller, etc) it is called relational because it finds the relation between two vallues.
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








//                                                         STRING OPERATORS
//the + operator is used to concatenate strings
let str1="nikesh";
let str2="kumar";
let result = str1 + " " + str2; //concatenation 
console.log(result);
console.log(str1+=str2) //it actually append the string
console.log("logical operator_______________________________________________________________________")








//                                              LOGICAL OPERATORS
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
console.log(!israining)     
console.log(!!israining)     //it is called the double bang the truth detector
console.log(!o)    //this is the inverter where this first convert the value into boolean and then return the opposite boolean value
//single ! is used to check if something does not exist
console.log(!!o); //this return the actual boolean value . first the inverter happens and then flip it back to its original truthiness
//double !! is used when you want to convert the value into a pure true of false value
//double not is generally used to convert any value into a boolean
// logical NOT operator (!) is used to reverse the Boolean value of an expression. If the expression is true, ! will make it false, and if it’s false, ! will make it true.
console.log(Boolean(israining))
//rather than !! Boolean() func is used because it is explicit, self explanatory and more maintainable
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
console.log("bitwise operators-------------------------------------------------------------------------");








//                                                          BITWISE OPERATORS---------
//bitwise operator used to manipulate the single bit of data in binary level to perform operations
//the bitwise operators first convert the values into binary and then perform operations
/* JavaScript is loosely typed, so it will coerce values before applying bitwise operations:
Strings  → converted to numbers (via Number()), then to 32-bit signed integers.
Booleans → true becomes 1, false becomes 0.
Floats   → truncated to 32-bit integers.
Non-numeric strings → become NaN, which is then treated as 0. */
//                                           bitwise AND & 
//this returns 1 only if both bits are 1 otherwise 0
console.log(3&2&1) //0
console.log(5 & 2) //0
console.log(2&5) //0
//                                           bitwise OR |
//this returns 1 if at least one of the bits is 1
console.log(2|3) //3
console.log(2|3|4) //7
//                                           bitwise XOR ^
//returns 1 if the bits are different and if they both are the same bits then it returns 0
console.log(7^5) //2
console.log(3^7) //4
console.log(3^7^4) //0
//                                           bitwise NOT ~
//inverts all bits which is 0 becomes 1 and 1 becomes 0
console.log(~5);   // -6
// Explanation: 5 in binary = 00000000000000000000000000000101
// Bitwise NOT → 11111111111111111111111111111010
// Which is -6 in two's complement form
console.log(~0);   // -1
console.log(~-1);  // 0
console.log(~~5)  //5
console.log(~~~5) //-6
//                                           left shift
//shifts all bits to the left by the specified number of positions and zeroes are filled in from the right.
console.log(5 << 1) //10
// formula = 5*2^1
// Operation: 5 << 1
// 5:   ...000101
// Shift left by 1:
// Res: ...001010  (This is decimal 10)
console.log(5<<2) //20
//formula = 5*2^2
console.log(5<<3) //40
//formula = 5*2^3 (but this formula has limits)
console.log(5<<1<<1) //20 
//formula = 5*2^1=10 then 10*2^1=20
//                                             right shift
//shifts all bits to the right  
//it preserve the sigle bit(the leftmost bit) if the number was negative, it stays negative
console.log(5>>1) //2
// 5:   ...000101
// Shift right by 1 (the last '1' falls off):
// Res: ...000010  (This is decimal 2)
console.log(5>>1>>1) //1
//                                            zero fill right shift >>>
// shifts bits to the right but does not preserve the sign. it always pushes zeros in from the left
//for positive numbers >> and >>> are the same
//for negative numbers >>> changes the sign bit to 0, causing the number to become a huge positive integer
// Operation: -5 >>> 1
// -5 in binary (32-bit): 11111111111111111111111111111011
// Shift right by 1, fill left with 0:
// Result:                01111111111111111111111111111101

console.log(5 >>> 1);  // Output: 2 (Same as regular shift)
console.log(-5 >>> 1); // Output: 2147483645 (Huge number!)
console.log("unary operator -------------------------------------------------------------------------------------------------")









//                                             UNARY OPERATOR
//this operator is used to perform operation on a single operand 
//                        increment and decrement
//these used to increase and decrease the variable by 1 
//              POST increment and decrement
a1= 10
console.log(a1++) //it will first print a1 then increment 10 by 1 which is 11
console.log(a1--) //it will first print a1 which is now 11 and then it will decrease the value by 1 which is 10
//              PRE increment and decrement
console.log(++a1) //it will first increase the a1 by 1 which is 11 then it will print a1
console.log(--a1) //it will first decrease the a1 by 1 which is 10 then it will print a1 
//                                               typeof
//this returns a string indicating the data type of the unevaluated operand, used for validation
//you can use any typeof ... or typeof()
const typeofop =()=>{
    console.log(typeof 4)  //number
    console.log(typeof "hello world")  //string
    console.log(typeof(true))  //boolean
    console.log(typeof(undefined))   //undefined
    console.log(typeof {name: "nikesh"})   //object
    console.log(typeof [1,1,2])  //object    arrays are objects
    console.log(typeof function(){})   //function
    console.log(typeof (()=>{}))   //function
    console.log(typeof null)  //object    this is a famous bug 
}
typeofop()
//                                                delete
//this removes a property from an object and if successful it returns true
//it only works on object properties you cant delete a standard variable declared with let, const or var
const a2 = {name: "nikesh"}
console.log(a2)    //{ name: "nikesh" }
const a3=delete a2.name
console.log(a2)    //{}
console.log(a3)    //true
//                                                  void
//this operator evaluates an expression but always returns undefined
const a4 = 8
const result1 = void(a4*5)
console.log(result1)  //undefined
//                                               unary plus +
//this is the fastest way to convert a string into a number
const a5 = "nikesh"
const a6 = +a5
console.log(typeof a5)  //string
console.log(a5, a6)     // nikesh NaN
console.log(typeof a6)  //number
//                                                 unary negation -
//this converts the operand to a number (if it is not one) and then negates it
const a7 = "nikesh"
const a8 = "48"
const a9 = -a7
const b1 = -a8
console.log( a7,a8+"    "+a9,b1)  //nikesh 48      NaN -48











console.log("ternary operator------------------------------------------------------------------------------------------------------------------")
//                                                        conditional (ternary) operator
//it is the only ternary operator in js which is just a shorthand of if..else
//syntax of it is  condition? expressionIfTrue : expressionIfFalse
const d1 = 50;
const d2 = (d1>=50) ? "senior" : "not senior"
console.log(d2)










console.log("comma operator---------------------------------------------------------------------------------------------------")
//                                                       comma operator
//allowe multiple expressions to be evaluated in a single statement 
//returns the value of the last expression and it is often used in for loop
const d3 = (1+2,3+4)
console.log("result= ", d3)












//                                                            nullish operator
console.log("nullish operator------------------------------------------------------------------------------------------------")
// ?? this is nullish coalescing which is just a backup plan
//it provides a default value only if the left hand side is null or undefined
//unlike || OR logical operator it does not overwrite valid values like 0 or false
//use ?? when you want a backup plan but dont want to override legitimate values like 0 or false
const age = 0
let  agevalid1 = age||18  //0 is falsy so this returns 18
let agevalid2 = age??18   //even 0 is falsy but it is not null/undefined so it will return 0
console.log(agevalid1)
console.log(agevalid2)












//                                                    optional chaining
console.log("optional chaining------------------------------------------------------------------------------------------------------------------")
//gentle knock . it safely access nested properties without throwing errors if something is misssing
//if the property does not exist it returns undefined instead of crashing
let user={
    name:"nikesh",
    age:"20",
    city:"noida"
}
console.log(user?.city)   //print noida 
console.log(user?.phone)  //no error just print undefined as phone property do not exist here














//                                                              nullish assignment
console.log("nullish assignment---------------------------------------------------------------------------------------------------------------------")
//initialize if empty, it puts the default value if the initial value is missing or empty
// assigns a value only if the variable is currently null or undefined 
//useful for setting defaults without overwriting existing values
const obje={
    time: 1200,
    timezone: null
}
obje.time ??= 1000;  //still prints 1200 because it is not null or undefined
obje.timezone ??= "india_standards_IST"   //the property value is null so prints the default provided values
console.log(obje)














console.log("question-----------------------------------------------------------------------------------------------------------------------")
let c1 = 6;       // Binary: 00000110
let c2 = 3;       // Binary: 00000011
let c3 = "6";     // String type, loosely equal to 6

// Bitwise left shift: c2 << 1 = 3 << 1 = 6
// Then: c1 <<= 6 → c1 = c1 << 6 → 6 << 6 = 384
c1 <<= c2 << 1;    

// Bitwise AND: 384 & 3 → Binary: 110000000 & 00000011 = 00000000 → c4 = 0
let c4 = c1 & c2;

// Bitwise OR: 384 | 3 → Binary: 110000000 | 00000011 = 110000011 → c5 = 387
let c5 = c1 | c2;

// Bitwise XOR: 384 ^ 3 → Binary: 110000000 ^ 00000011 = 110000011 → c6 = 387
let c6 = c1 ^ c2;

// Bitwise NOT: ~384 → -(384 + 1) = -385
let c7 = ~c1;

// Logical expression:
// (c1 == c3) → true ("6" == 6)
// (c4 < c5) → true (0 < 387)
// (c6 === c5) → true → !(true) → false
// Final: true && true || false → true
let c8 = (c1 == c3) && (c4 < c5) || !(c6 === c5);

// Ternary operator:
// If c8 is true → typeof c7 → typeof -385 → "number"
// If false → --c2 → decrement c2
let c9 = c8 ? typeof c7 : --c2;

// Output all values
console.log("c1:", c1);           // 384
console.log("c2:", c2);           // 3 (unchanged)
console.log("c3:", c3);           // "6"
console.log("c4 (c1 & c2):", c4); // 0
console.log("c5 (c1 | c2):", c5); // 387
console.log("c6 (c1 ^ c2):", c6); // 387
console.log("c7 (~c1):", c7);     // -385
console.log("c8:", c8);           // true
console.log("c9:", c9);           // "number"

