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




