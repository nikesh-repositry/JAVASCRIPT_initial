// --------------------conditionals in  js
// conditionals statements allow code to make decisions by executing different 
// blocks of code based on whether a conditions is trur or false

/* there are different types of conditionals statements
1. if 
2. if-else
3. if-else ladder 
4. nested if 
5. switch case
5. ternary operator */

//-------------------------------1  if
console.log("if--------------------------------------")
let temp = 45
if (temp>25){
    console.log("it is hot whether")
}
//only if the condition is true the if block will execute 

//-------------------------------2  if else 
console.log("if else---------------------------------")    
let age = 16
if(age>=18){
    console.log("you can vote")
}
else{
    console.log("you cannot vote")
}
//IF if block conditon not satisfied then else block will execute 

//-------------------------------3  if else ladder
console.log("if else ladder----------------------------")
let cost = 100
if(cost>=200){
    console.log("buy a book")
}else if(cost>=150){
    console.log("buy a folder")
}else{
    console.log("buy a holder")
}

//-------------------------------4  nested if
console.log("nested if---------------------------------")
let score = 8.5
if(score >= 8){
    if(8<= score <=9){
        console.log("group B")
    }else{
        console.log("group A")
    }
}
else{
    console.log("training")
}

//-------------------------------5  switch case
console.log("switch case-------------------------------")
const daynum = 3
let dayname;
switch (daynum){ //switch checks the values of daynum against each case
    case 1:      //if daynum ===1 this block will run the 1 is the value that can be anything based on reqirement
        dayname = "sunday"
        break;   //break is required to stop execution here without break code would fall through into the next case
    case 2:
        dayname = "monday"
        break;
    case 3:
        dayname = "tuesday";
        break;
    default:     //runs if none of the above cases match 
        dayname = "invalid day number"         //provides a fallback value
}
console.log(dayname)


//-----------------------------6 ternary operator
console.log("ternary operator----------------------------")
let number = 10;

// Check if number is even or odd
// If (number % 2 === 0) is true, result is "Even". Otherwise, it is "Odd".
let result = (number % 2 === 0) ? "Even" : "Odd";

console.log(result); // Output: Even


