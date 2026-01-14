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
console.log(b4) //60



console.log("searching------------------------------------------------")
//includes  indexOf  find  findIndex
//                                   include
//includes(searchelement, fromIndex?)
//checks if an array contains a value-returns true or false
//NO index returned i.e. good for simple membership tests.
//indexOf cant find NaN but includes can
const b5 = ["a","b"] 
console.log(b5.includes("a")) //true
console.log([NaN].includes(NaN)) //true //includes uses samevaluezero semantics(like === but treats NaN as equal to NaN)

//                                 indexOf
//indexOf(searchelement, fromIndex?)
//finds the index of the first occurrence of a value; returns -1 if not found
//compares with strictly ====
//works by referece for objects- two identical looking objects wont match unless they are the same reference. returns the first match only
console.log(b5.indexOf("b")) //1
console.log(b5.indexOf("x")) //-1
console.log([NaN].indexOf(NaN)) //-1 cannot match NaN with ===

//                                   find
//find(predicate, thisArg?)
//returns the first element that satisfies a predicate; undefined if none
//signature: arr.find((value, index, array) => boolean, thisArg).
//it returns the element itself not the index. stops at the first match. ideal for searching arrays of objects
const user=[
    {name:"nikesh"},
    {name:"kumar"}
];
const c1=user.find(i=>i.name==="nikesh");
const c2=user.find(i=>i.name.startsWith("k"))
console.log(c1) //{ name: 'nikesh' }
console.log(c2) //{ name: 'kumar' }
//find first even number
const numbers = [1, 3, 7, 8, 10];
const firstEven = numbers.find((value, index, array) => value % 2 === 0);
console.log(firstEven); // 8
//using thisArg
const fruits = ["apple", "banana", "cherry"];
function checkLength(value) {
  return value.length === this.targetLength;
}
const result = fruits.find(checkLength, { targetLength: 6 });
console.log(result); // "banana"

//                                     findIndex
//findIndex(predicate, thisArg?)
//Signature: arr.findIndex((value, index, array) => boolean, thisArg).
//returns the index of the first element that satisfies a predicate; -1 if none
//more flexible than indexof because it uses a predicate func. great for objects or computed conditions
const c4 = [1,2,23,3,5]
console.log(c4.findIndex(x=>x%2==0)) 
/*Objects by reference: indexOf/includes only match the same object reference; use find/findIndex for property-based matching. 

NaN behavior: includes finds NaN; indexOf does not. find/findIndex can match NaN via a predicate like Number.isNaN(x). 

Starting index (fromIndex): includes and indexOf support fromIndex to start searching later in the array. Negative fromIndex counts from the end.

Performance: includes/indexOf are simple linear scans; find/findIndex add callback overhead but enable richer logic. All are O(n) in the worst case.

First match only: All four methods stop at the first match. For multiple matches, use filter
*/



console.log("slicing---------------------------------------------------")
/*it is a non destructive extraction
returns a shallow copy of a portion of an array into a new array
does not modify the original array 
syntax=      array.slice(start,end);
start: index where extraction begins(inclusive)
end:   index where extraction stops(exclusive). if omitted, goes to the end
negative indexes count from the end -1=last element */
//use slice when you want a copy of part of an array without changing the original
const d1 = ["a","b","c","d","e"]
console.log(d1.slice(1,5))   //[ 'b', 'c', 'd', 'e' ]
console.log(d1.slice(2))     //[ 'c', 'd', 'e' ]
console.log(d1.slice(-4,-2)) //[ 'b', 'c' ]
console.log(d1.slice(-5))    //[ 'a', 'b', 'c', 'd', 'e' ]



console.log("spicing---------------------------------------------------")
/*it do destructive modification
changes the content of an array by removing, replacing or adding element
it modifies the original array  
syntax:  array.splice(start, deleteCount, item1, item2, ...);
start:  index where changes begin
deletecount:  number of elements to remove
item..:  elements to insert at start */
//      removing
const d2 = ["a","b","c","d"]
console.log(d2.splice(1,2))
//      adding
console.log(d2.splice(1,0,"10","20"))
//      replacing
console.log(d2.splice(1,1,"x","y"))
