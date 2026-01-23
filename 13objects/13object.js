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
//                                     1. Object.keys(obj)
//returns an array of enumerable  property names(keys)
console.log(Object.keys(objet))   //[ 'name', 'location' ]

//                                     2. Object.values(obj)
//returns an array of enumerable property values
console.log(Object.values(objet))   //[ 'nikesh', 'noida' ]

//                                     3.Object.entries(obj)
//returns an array of [key,value] pairs
console.log(Object.entries(objet))  //[ [ 'name', 'nikesh' ], [ 'location', 'noida' ] ]

//                                     4. Object.assign(target, source)
//copies properties from source to target. returns the modified target
const a1={user1:"bala"}
const a2={user2:"jhilmil"}
console.log(Object.assign(a1,a2))   //{ user1: 'bala', user2: 'jhilmil' }

//                                     5. Object.freeze(obj)
//lock the object-no add remove update allowed then
Object.freeze(a1)
a1.location="noida"
delete a1.user1;
console.log(a1)   //{ user1: 'bala', user2: 'jhilmil' }   no change at all
 









