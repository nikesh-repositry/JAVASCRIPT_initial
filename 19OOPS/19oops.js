//object in js
/*
an object is a fundamental data structure used to store collections of related data and functionality
it stores data in key-value pair
Values Can Vary: A property’s value can be:
A primitive (string, number, boolean, etc.)
Another object
A function (called a method when inside an object)

Dynamic: You can add, modify, or delete properties at runtime.

Encapsulation: Objects group related data and behavior together, making code more organized. */







                            //ways to create an object in js
//                                 1. object literal    
//it is the simplest and most common way to create an object just by using {}
//it is static 
//use it when you need only one specific object
//it does not act as a blueprint for other object creation
const user1={
    name: "nikesh",
    greet: function(){
        console.log(`object literal hello ${this.name}`) //here if i didnt used this. then name is not defined error comes up
        //and the error comes because js does not know which object property you are trying to access
    }
}
user1.greet()

//                                 2. factory function      
//it is regular function that returns a new object and it generates objects based on the input you give it
//it is a template as you can create more than one object easily
//but whenever you create an object a new copy of greet function is created in memory, which can be slightly inefficient if you have thousands of objects
function user2(name){
    return {
        name,   //name:name, not necessary as both variable name is same
        greet(){
            console.log("regular function " + this.name)
        }
    }
}                      
user2("nikesh").greet()
user2("javascript").greet()

//                                 3. constructor function
//this is an older and traditional way to create objects that behave like "instance" 
//you use the new keyword to call the function
//it uses the this keyword to bind properties to the new object.
//and when you use new js automatically creates an object, links it to a prototypes and return it.
function user3(name){
    this.name = name;
    this.greet = function(){
        console.log("constructor function "+ this.name)
    }
    
}
// user3("nikesh").greet()      calling by this way just modifying the global object which is not safe 
const u = new user3("nikesh")
u.greet()





