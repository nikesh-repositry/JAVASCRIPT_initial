/*object in js core data structure for real world entities
  object stores value in key-value pair
  they are flexible, dynamic and deeply tied to the language prototype system  */
console.log("creation of object--------------------------------------")
//creating an object using literal syntax
let car={
    brand:"tata",
    color:"black",
    speed:"180",
    drive: function(){
        console.log("the car is driving")
    }
};
console.log(car) //prints the entire car object with its properties and methods
console.log(car.drive())
//the car is driving
//undefined    so why the undefined is being printed here the reason is that the function does not return anything here and in js if a func does not explicitly returns a value then it returns undefined by default
car.drive() //the car is driving  

//create an object using the object constructor
let person = new Object()
person.name = "nikesh"
person.age= "21"
console.log(person)    //{ name: 'nikesh', age: '21' }







console.log("accessing object properties-------------------------------")
//dot notation
//use it when property name is a valid identifier 
console.log(car.brand);     //tata
console.log(person.name);    //nikesh

//bracket notation
//use it when property name is dynamic, stored in variable or invalid identifier
console.log(car["speed"]);   //180







console.log("udating and adding new properties-------------------------")
const fruit = {
    banana:"banana has no seed",
    lichi:"lichi has one seed"
}
console.log(fruit)    //{ banana: 'banana has no seed', lichi: 'lichi has one seed' }
fruit.banana="banana hai no seed and its sweet"
console.log(fruit)
// {
//   banana: 'banana hai no seed and its sweet',
//   lichi: 'lichi has one seed'
// }
//if the property exists it gets updated and if it does not exist it gets created






console.log("deleting properties------------------------------------")
const user ={
    name:"nikesh",
    role:"sde 3",
}
console.log(user)      //{ name: 'nikesh', role: 'sde 3' }
delete user.role;
console.log(user);     //{ name: 'nikesh' }
/*delete only removes the property, not the object itself
it affects performance if used excessively because it changes the shape of object in memory */









console.log("this keyword in object------------------------------------")
//this refer to the object that owns the method at runtime
const obj = {
    name:"nikesh",
    greet:function(){
        return "hello, my name is "+this.name;
    }
};
console.log(obj.greet())    //hello, my name is nikesh
/*inside a method "this" points to the object calling the method
if func is deleted "this" may become undefined(in strict mode) or window(in non-strict mode)
arrow func do not bind their own this; they inherit from the enclosing scope */
const obj2 = {
  name: "Nikesh",
  arrowGreet: () => {
    console.log("Hello, " + this.name);
  }
};

obj2.arrowGreet(); 
// "Hello, undefined" (because arrow functions don’t bind `this`)









console.log("object methods-----------------------------------------")
const objet = {
    name:"nikesh",
    location:"noida"
}
//                                     1. Object.keys(obj)  not change object
//returns an array of enumerable  property names(keys)
console.log(Object.keys(objet))   //[ 'name', 'location' ]

//                                     2. Object.values(obj)  not change object
//returns an array of enumerable property values
console.log(Object.values(objet))   //[ 'nikesh', 'noida' ]

//                                     3.Object.entries(obj)  not change object
//returns an array of [key,value] pairs
console.log(Object.entries(objet))  //[ [ 'name', 'nikesh' ], [ 'location', 'noida' ] ]

//                                     4. Object.assign(target, source)  change object
//copies properties from source to target. returns the modified target
const a1={user1:"bala"}
const a2={user2:"jhilmil"}
console.log(Object.assign(a1,a2))   //{ user1: 'bala', user2: 'jhilmil' }

//                                     5. Object.freeze(obj)    change object
//lock the object-no add remove update allowed then
Object.freeze(a1)
a1.location="noida"   //ignored
delete a1.user1;      //ignored
console.log(a1)   //{ user1: 'bala', user2: 'jhilmil' }   no change at all
 
//                                     6. Object.seal(obj)     change object
//lock structure means can not add and remove but can update existing properties
const book = {title:"network"}
Object.seal(book)
book.title="computer network"  //allowed
book.author="abc"              //ignored   
delete book.title;             //ignored
console.log(book)  //{ title: 'computer network' }

//                                     7. obj.hasOwnProperty(key)    do not change object
//checks if the object has the property directly(not inherited)
const a3={a:"abc", b:"xyz"}
console.log(a3.hasOwnProperty("a"))   //true
console.log(a3.hasOwnProperty("c"))   //false








console.log("singleton object-------------------------------------------")
/*a singleton object is a single unique instance created once and resued
throughout your code. it is not meant to be dublicated or used as a 
blueprint for other objects
= created using object literal syntax ( {} )
= exists as one specific instance
= used for global configuration, logging  or shared state
use it when = app wide configuration
            = logging service
            = shared cache/store
            = authentication/session manager
demerits = overuse can lead to tight coupling
         = harder to test or reset state
         = avoid using singletons for data models or user instances            */
const config = {
  appName: "MyApp",
  version: "1.0",
  debug: true
};
//this config object is singleton, it is created once and resued wherever needed
class User {
  constructor(name) {
    this.name = name;
  }
}
const u1 = new User("Nikesh");
const u2 = new User("Alex");
console.log(u1 === u2); // false (two separate instances)








console.log("destructuring--------------------------------------------")
/*object destructuring in js is a concise syntax that let you extract properties
from object and assign them to variables directly. it simplifies code,
imporve readability and supports renaming, default values and nested structure  */
const b1 = {name:"nikesh", location:"noida"}
const{name,location}=b1
console.log(name)   //nikesh
console.log(location)  //noida
/* main concept benefit of destructuring is 
// Without destructuring
const name = user.name;
const age = user.age;

// With destructuring
const { name, age } = user;
 */
/*
Basic	         { key } = obj	      Extract property
Rename	         { key: newName }	  Rename variable
Default	         { key = default }	  Fallback value
Nested	         { nested: { key } }  Deep extraction
Function Param	 function({ key })	  Clean function signature
Rest	         { key, ...rest }	  Capture remaining props */


const { nam, age = 30 } = b1;
console.log(age); // 30

const b2={name1:"jhilmil",year:2003}
const {year} = b2
console.log(b2.name1)




