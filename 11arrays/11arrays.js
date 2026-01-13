//array is a special type of object
//array is an ordered collection of values(elements)
//array can hold mixed typef of data even other arrays too
//array is mutable 
//array index starts from 0

console.log("creating arrays-------------------------------------------")
const a1 = [];                  //empty array
const a2 = [1,2,3];             //literal 
const a3 = new Array(3);        //length 3, empty slots
const a4 = Array.of(1,2,3);     //safe creation
//tip is try to use array literal than new Array()

console.log("accessing and updating------------------------------------")
const a5 = [1,2,3]
console.log(a5)
console.log(a5[1])     //accessing via index
a5[1]=4;               //update
console.log(a5[1])

