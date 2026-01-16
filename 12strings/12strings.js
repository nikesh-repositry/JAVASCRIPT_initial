//                                                      STRING METHODS AND PROPERTIES   node 7strings.js
//string are immutable, meaning their values cannot be changed after creation. Instead, string methods return new strings with the modified content
//1. we cannot change the original string but can assign a new one 
let str = "Hii";
str = 'h'+str[1];
console.log(str);
//2. string[ ] = we can access character of string by index number
let aa = "hello world";
ab = aa[6];
console.log(ab);
//3. string.length = this property is used to know the length of the string
let ac = "hello javascript";
console.log(ac.length);
//4. charAt() = used to know the character present in that specific index number
let ad = "nice try";
console.log(ad.charAt(6));
//5. charCodeAt() = The charCodeAt() method returns the code of the character at a specified index in a string:
let ae = "living";
console.log(ae.charCodeAt(3));
//6. string.at() = it can handle negative index 
let af = "java";
console.log(af.at(-2)); 
//7. slice(start, end), substring(start, end), substr(start, length) = used to extract part of string
let ag = " my name is javascript"
let ah = ag.slice(11);
let ai = ag.substring(11,-1);
let aj = ag.substr(11,ag.length);
console.log(ah,ai,aj);
