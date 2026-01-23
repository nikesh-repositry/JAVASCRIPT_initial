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
console.log(person)






console.log("accessing object properties-------------------------------")
//dot notation
//use it when property name is a valid identifier 
console.log(car.brand);
console.log(person.name);

//bracket notation
//use it when property name is dynamic, stored in variable or invalid identifier
console.log(car["speed"]);







console.log("udating and adding new properties-------------------------")
const fruit = {
    banana:"banana has no seed",
    lichi:"lichi has one seed"
}
console.log(fruit)
fruit.banana="banana hai no seed and its sweet"
console.log(fruit)
//if the property exists it gets updated and if it does not exist it gets created






console.log("deleting properties------------------------------------")
const user ={
    name:"nikesh",
    role:"sde 3",
}
console.log(user)
delete user.role;
console.log(user);
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
console.log(obj.greet())
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







