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


console.log("adding and removing elements------------------------------")
// push pop unshift shift 
//these all returns a new array
const a6=["noida","delhi"]
a6.push("patna") //push used to add element at the end of the array
console.log(a6)  //[ 'noida', 'delhi', 'patna' ]
a6.pop()         //pop used to remove last element of the array
a6.pop("noida")  //even if you entered any element name inside the pop it ignores it and remove element from the last index of the array
console.log(a6)  //[ 'noida' ]
a6.unshift("delhi") //it is used to add element at the start of the array
console.log(a6)     //[ 'delhi', 'noida' ]
a6.shift()          //it removes the first element from the array
console.log(a6)     //[ 'noida' ]
//push/pop O(1) are faster than shift/unshift O(n) because push pop only touch the end of the array while shift and unshift manipulate the front forcing the engine to reindex every element 


console.log("iteration in array---------------------------------------")
const a7 = [1,2,3,4]
                                    //classic for loop
//it does not return a new array                                    
for(let i=0; i<a7.length; i++)console.log(a7[i]);
console.log("for of loop---------- ")
                  //modern standard: for..of (cleanest for simple loop)
//it does not return a new array and can be break early                  
for(const val of a7){ 
    console.log(a7[val]+" "+val)  //in for of loop the val inside a7[i] will be starts from 1 not 0
}
console.log("foreach loop-----------")
                     //functional: forEach (cannot break early)
//it does ot return a new array
/* syntax:
array.forEach(function(currentValue, index, array) {
  // code to execute for each element
});
currentvalue is the element being processed 
index(optional) is the index of the element
array(optional) is the whole array being traversed
*/
//basic usage--------------------------------------
a7.forEach(function(i){console.log(i)})   
a7.forEach(i=>console.log(i))
//with index--------------------------------------
a7.forEach((val, idx)=>{
    console.log(`element ${idx}: ${val}`)
})
//using all three --------------------------------
a7.forEach((currentvalue, index, array)=>{
    console.log(
        "value: "+ currentvalue*2+
        " index: "+index+
        " full array: "+array
    );
});


console.log("transformation methods-----------------------------------")
//this is the holy trinity of es6
//map filter reduce
//these are immutable and return a new array
//                                     .map()
//use map when want to change every item in an array or transform data
/* syntax
const newArray = arr.map((currentValue, index, array) => {
  return transformedValue;
});
*/
const b1=[10,20,30];
const b2=b1.map(n=>n/10) //n is here the currentvalue not the index or array
console.log(b2)
//                                     .filter()
//creates a new array with elements that pass a condition
/*syntax
const filteredArray = arr.filter((currentValue, index, array) => {
  return condition; // true keeps the element, false removes it
});
 */
const b3=b1.filter(n=>n/10)
console.log(b3)
//                                    .reduce()
//reduces an array to a single value(number, string, object, etc)
/*syntax
const result = arr.reduce((accumulator, currentValue, index, array) => {
  return updatedAccumulator;
}, initialValue);
 */
//accumulator = the running total or result carried through iterations
//currentvalue = the current element being processed
//currentindex(optional) = index of the current element
//array(optional) = the array being reduced
//initialvalue(optional) = starting value for the accumulator. if omitted the first array element is used.
const b4=b1.reduce((acc,cuv)=>acc+cuv); //here i did not give initial value so by default it takes the first element of the array to starts with
console.log(b4)


