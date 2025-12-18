//short circuit concept
//short-circuiting is a feature that checks conditions and stops as soon as it knows the answer. It doesn't look for the rest of the expression, and that prevent unnecessary evaluations.
/*  
⚡ Falsy Values in JavaScript
There are exactly 8 falsy values. These are the ones that evaluate to false in a boolean context:
false
0 (zero)
-0 (negative zero)
0n (BigInt zero)
"" (empty string)
null
undefined
NaN (Not-a-Number)
👉 Any of these will stop an && chain or trigger the fallback in an || chain.

✅ Truthy Values in JavaScript
Everything else is truthy. That means:
Non-zero numbers (1, -5, 3.14, etc.)
Non-empty strings ("hello", "0", "false", etc.)
Objects ({}, [], function(){}, etc.)
Dates (new Date())
Symbols (Symbol("x"))
BigInts other than 0n (1n, -2n, etc.)
👉 Even "false" (string) and [] (empty array) are truthy, which often surprises beginners.
*/
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
