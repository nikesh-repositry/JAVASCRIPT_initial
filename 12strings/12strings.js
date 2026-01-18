//                                                      STRING METHODS AND PROPERTIES   node 7strings.js
//string are immutable, meaning their values cannot be changed after creation. Instead, string methods return new strings with the modified content
//strings hase index starting from 0 from left to right and -1 from right to left
//you can use double quotes "" single quotes '' or backticks ``
let a1 = "hello"
let a2 = 'hello'
let a3 = `hello`
console.log(a1,a2,a3)



//template literals
console.log("template literals----------------------------------------")
/*a template literal is a special way to write strings in js using backticks ``
strings literals let you insert variables or expressions directly inside the string
which is called string interpolation */
console.log(`${a1} world`)



console.log("string constructor---------------------------------------")
let a4 = new String("hello coder")
console.log(typeof(a3))  //type of normal string variables is string but
console.log(typeof(a4))  //type of constructor using string is object



console.log("escape sequences-----------------------------------------")
/*an escape sequence is a special character combo that lets you do things
in a string that are not normally allowed like adding a quotes
///////escape sequence look like 2 characters in code but they count as 
// 1 character in string length */
console.log("hello \n world") //\n push the further characters into next line
console.log("hello \t world") //hello    world
console.log("hello \\ world") //hello \ world
console.log("hello \* world") //hello * world
console.log("hello \' world") //hello ' world



//we cannot change the original string but can assign a new one 
let str = "Hii";
str = 'h'+str[1];
console.log(str); //hi



console.log("common operation---------------------------------------")
a8 = "hello galaxy"
//length
console.log(a8.length) //give length
//concatenation
console.log("right".concat(" ",a8))  //concate strings
console.log(a8+" baba")  // concate 
//access characters
console.log(a8.charAt(4)) 
console.log(a8[4])
//substrings
console.log(a8.slice(0,4))  //hell      include 0 exclude 4 upto 3 
console.log(a8.slice(4))    //o galaxy  from 4 to last character
console.log(a8.slice(-4))   //laxy      from -4 to last character
console.log(a8.slice(-4,-1))//lax       from -4 to -2 excluded -1
console.log(a8.substring(4))//o galaxy  from 4 to last character



console.log("searhing------------------------------------------------")
let str1 = "Hello World";
console.log(str1.indexOf("World"));   // 6
console.log(str1.includes("Hello")); // true
console.log(str1.startsWith("He"));  // true
console.log(str1.endsWith("ld"));    // true



console.log("modifying-----------------------------------------------")
let str2= "  javaScript   "
console.log(str2.trim());
console.log(str2.toLocaleLowerCase())
console.log(str2.toUpperCase());
console.log(str2.toLowerCase())
console.log(str2.replace("Script"," is a language too"))
console.log(str2.replaceAll("a","i")) //or 
console.log(str2.replace(/a/g, "i"))



console.log("splitting and joining-----------------------------------")
let str3 = "right,left,up,down";
let d1 = str3.split(",") //Split a string into substrings using the specified separator and return them as an array.
console.log(d1) //[ 'right', 'left', 'up', 'down' ]
let d2 = d1.join(" /|/ "); //Adds all the elements of an array into a string, separated by the specified separator string.
console.log(d2) //right | left | up | down



console.log("more methods--------------------------------------------")
let str4 = "foo fii faa fiiaa";
console.log(str4.match(/fi/)) //It returns a match object with extra info because there’s no global flag.
console.log(str4.match(/fi./g)) //[ 'fii', 'fii' ]   why is not fiiaa 
console.log(str4.match(/fi.+/g)); //[ 'fii faa fiiaa' ] why is faa included
//fi = literal characters
//. = matches exactly one character (any character except newline)
//g = global flag so it finds all matches not stop on the first match
//                study about regex regarding this .match() method

console.log(str4.repeat(2))
console.log(str4.padStart(30,"*")) //*************foo fii faa fiiaa
console.log(str4.padEnd(20,"*")) //foo fii faa fiiaa***
