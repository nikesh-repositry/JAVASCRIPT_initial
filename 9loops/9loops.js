console.log("for loop-------------------------------------")
//the most common loop 
//use it when you exactly how many times you want to run a block of code
//syntax:        for(initialization; condition; afterthought){...}
for(let i=1; i<6; i++){
    console.log(i)
}


console.log("while loop------------------------------------")
//it repeats a block of code until a specified condition is matched
//use this when the number of iterations is not known beforehand
//the condition is checked before the code runs. if the condition is false initially the code never runs
//syntax:   while(condition){...}
let i1=1;
while(i1<=5){
    console.log(i1)
    i1++
}


console.log("do while loop----------------------------------")
//similar to while loops
//but it executes the code block once before checking the condition
//syntax:   do{...
//          }while(condition);
let i2=1
do{
    console.log(i2);
    i2++;
}while(i2<=5);


console.log("for of loop-----------------------------------")
//introduced in ES6 
//this loop iterated over iterable objects like arrays, strings, maps and sets
//it gives you the values directly
//syntax:   for(const element of iterable){...}
const number = [1,2,3,4,5];
for(const f of number){
    console.log(f);
};


console.log("for in loop------------------------------------")
//this loop iterates over key of an objects or the indexes of an array
//in array this loop returns the index as a string not the value
//avoid using for..in for arrays because the order of iteration is not guaranteed and it may pick up inherited properties
//use for..of or .foreach() for arrays instead
//syntax:   for(const key in object){...}
const num = {
    one:"1",
    two:"2",
    three:"3",
    four:"4",
    five:"5"
}
for(const n in num){
    console.log(num[n])
}


console.log("continue and break----------------------------------------")
// break immediately exits the loop entirely
// continue skips the current iteration and jumps to the next one
for(let i = 1; i<8; i++){
    if(i===5) continue;//when i is 5 it continue but jumps the value 5
    if(i===7)break;//when i is 7 the entire loop is break and no more loop execution
    console.log(i)
}