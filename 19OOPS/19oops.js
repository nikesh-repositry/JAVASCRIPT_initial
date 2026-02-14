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
//does not involve prototype by default
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
//automatically sets up a link to student prototype
function user3(name){
    this.name = name;
    this.greet = function(){
        console.log("constructor function "+ this.name)
    }
    
}
// user3("nikesh").greet()      calling by this way just modifying the global object which is not safe 
const u = new user3("nikesh")
u.greet()

//                                 4.class syntax
//it is the modern standard 
/*It groups the data (constructor) and the behavior (methods) into one clean block. Crucially, methods defined in a class are automatically added to the "prototype," meaning only one copy of the greet function exists in memory, no matter how many users you create.*/
//example code 1
class user4{
    name = "nikesh";
    location = "noida";
}
let u3 = new user4()
console.log(u3)      //user4 { name: 'nikesh', location: 'noida' }
let u4 = new user4()
console.log(u4)      //user4 { name: 'nikesh', location: 'noida' }

//example code 2
class user5{
    name = "nikesh";
    add ="noida";
    constructor(name="malesh",add){
        this.name = name;
        this.add= add;
    }
}
let u5 = new user5("alen","delhi")
console.log(u5)                  //user5 { name: 'alen', add: 'delhi' }
let u6 = new user5()
console.log(u6)                  //user5 { name: 'malesh', add: undefined }










//                                      this keyword
//its value depends on how the function or method is called
//in oop this refers to the object that is calling the method
//it is used to access the current instance properties or methods
//arrow functions dont have their own this-they inherit this from the surrounding lexical scope
let user = {
  name: "Nikesh",
  greet: function() {
    console.log("Hello " + this.name); // Works: "Hello Nikesh"
  },
  greetArrow: () => {
    console.log("Hello " + this.name); // ❌ undefined
  }
};

user.greet();      // "Hello Nikesh"
user.greetArrow(); // "Hello undefined"

//                                      new keyword
//in js the new keyword is used to create an instance of an object from a constructor function or class
//it is like saying that make me a new object from this blueprint 











//                                       prototypes
/* in js every function automatically gets a prototype property when defined
like when you use constructor function with new keyword, the created object interanl prototype points to that function
this means all instances share the same method defined on the prototype instead of dublicating them in memory
well in simple mean
prototype in js is like a shared storage locker and instead of every object carrying its own heavy methods they all share one set of tools like method kept in a central location
prototype optimized the memory 
                            1. The Problem: Memory Waste
inside BankAccount, you had the deposit function defined inside the constructor:
  
function BankAccount(holdersName, balance = 0) {
    this.holdersName = holdersName;
    this.balance = balance;
    this.deposit = function(amount) { ... } // Created every single time
}

If you create 1,000 bank accounts, JavaScript creates 1,000 copies of the deposit function. This wastes a lot of memory because the function does the exact same thing for everyone.



                           2. The Solution: The Prototype
When you move the method outside using BankAccount.prototype, you are telling JavaScript: "Store this function once in a special place where all BankAccount objects can find it."

BankAccount.prototype.deposit = function (amount) {
     this.balance += amount;
}
and Now, if you have 1,000 accounts, there is only 1 copy of deposit in memory.

                            3. How JavaScript Finds Methods (The Chain)
When you call muskanAccount.deposit(500), JavaScript follows these steps:
Check the object: Does muskanAccount have a property called deposit? (No, it only has name and balance).
Check the Prototype: It follows a hidden link (called __proto__) to BankAccount.prototype. Does it find deposit there? Yes!
Execute: It runs that function.
This "searching" process is called the Prototype Chain.

                            4. Class Syntax vs. Prototype
In your Student class example, JavaScript is actually doing the prototype work for you behind the scenes:

class Student {
    constructor(name, age) {
        this.name = name; // Stored on the instance
        this.age = age;   // Stored on the instance
    }
    introduceMyself() {   // Automatically stored on Student.prototype!
        console.log(`My name is ${this.name}`);
    }
}

Even though you wrote it inside the class block, introduceMyself does not live on the s1 object. It lives on Student.prototype. Classes just make the syntax look cleaner.
*/


//example of contructor function with prototype
function BankAccount(holdersName, balance = 0) {
    this.holdersName = holdersName;
    this.balance = balance;
}
// Methods added to prototype (shared by all instances)
BankAccount.prototype.deposit = function(amount) {
    this.balance += amount;
};
BankAccount.prototype.withdraw = function(amount) {
    this.balance -= amount;
};
let muskanAccount = new BankAccount("Muskan", 1000);
muskanAccount.deposit(500);
console.log(muskanAccount.balance); // 1500
// Why use prototype here?
// If you define deposit and withdraw inside the constructor, every object gets its own copy of those functions.
// By attaching them to BankAccount.prototype, all accounts share the same function reference, saving memory.



//example of factory function
function Student(name) {
    return { name };
}
let ob1 = Student("mkl");
console.log(ob1); // { name: "mkl" }
// Factory functions don’t use prototype.
// Each call returns a fresh object.
// Methods (if added) are recreated per object, not shared.


//es6 class
class Student1 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    introduceMyself() {
        console.log(`My name is ${this.name}, age is ${this.age}`);
    }
}
let s1 = new Student1("Muskan", 19);  
s1.introduceMyself(); // My name is Muskan, age is 19
// Under the hood, classes still use prototypes.
// Methods like introduceMyself are stored on Student.prototype.
// Cleaner syntax compared to manually attaching methods.
















//                                     OOPS
/* object oriented programming in js is programming paradigm based on the concept of objects
these objects encapsulate both attributes and the functions that operate on that attributes like methods
js is not purely class based language like java c++ but it supports oops principle through its prototype based model and class syntax.
class===a blueprint which encapsulates properties and methods
object==instance of a class, each object has its own unique set of values for its properties
*/
class Car {
    constructor(name, color, mileage) {
        this.name = name;
        this.color = color;
        this.mileage = mileage;
    }
    start() {
        console.log(`${this.name} is starting...`)
    }
    stop() {
        console.log(`${this.name} is stopping...`)
    }
}
let bmw = new Car("BMW", "Dark Blue", 45);
let toyota = new Car("Toyota", "Silver Blue", 28);
let buggati = new Car("Buggati", "Brown", 5);
console.log(bmw, toyota, buggati) //Car { name: 'BMW', color: 'Dark Blue', mileage: 45 } Car { name: 'Toyota', color: 'Silver Blue', mileage: 28 } Car { name: 'Buggati', color: 'Brown', mileage: 5 }

//                                      constructor
//constructor is a special method within a class that is automatically called when a new object instance of that class is created
//it is primarily used to initialize object properties with specific values or perform setup tasks for the object   
/* characteristics
purpose: to create and initialize objects
name: must be named constructor
automatic invocation: called automatically when an object is created using the new keyword
initialization: sets initial values for object properties
implicit constructor: if a class does not have a contructor, js provides a default empty constructor
derived class constructor: if a derived class does not have a contructor it calls the parent constuctor passing along any arguments


*/












//                                      pillars of oop
/* there are four pillar of oop
abstraction = hiding complexity and showing only the essential features
encapsulation = hiding data inside objects and provide security
inheritance = using properties and methods from another object/class
polymorphism = same method behaving differently based on the object
*/












//                                          abstraction
//abstraction helps to hide the internal complexity and show only the necessary functionality
//it goal is to let the user focus on what the object does not how it does it
// Abstracted utility functions
function calculateArea(shape, dimensions) {
  if (shape === "circle") {
    return Math.PI * dimensions.radius * dimensions.radius;
  }
  if (shape === "square") {
    return dimensions.side * dimensions.side;
  }
  if (shape === "rectangle") {
    return dimensions.length * dimensions.width;
  }
  throw new Error("Unknown shape");
}
// Abstracted function to display result
function drawShape(shape, dimensions) {
  const area = calculateArea(shape, dimensions);
  console.log(`Drawing a ${shape} with area ${area}`);
}
drawShape("circle", { radius: 5 });
drawShape("square", { side: 10 });
drawShape("rectangle", { length: 4, width: 6 });
//here the user of drawshape does not need to know how the area is calculated they just call drawshape with parameters and the internal logic is abstracted away

//                                      encapsulation
//it restrict direct access to data and controlling it through methods
//it protects internal state and enforce rules
//in js is it done using private fields (#) and getter/setter for controlled access
class userprofile{
    #password; //private field

    constructor(username, password){
        this.username = username
        this.#setpassword(password)
    }

    #setpassword(password){     //controlled setter
        if(password.length<8){
            throw new Error("PASSWORD MUST BE AT LEAST 8 CHARACTERS LONG")
        }
        this.#password=password
    }

    updatepassword(newpassword){    //public method to update password safety
        this.#setpassword(newpassword)
    }

    checkpassword(input){           //public method to check password
        return this.#password===input;
    }
}
const userr= new userprofile("nikesh","nikesh78")
// console.log(userr.checkpassword("nikesh77")) //true
//below code line is wrong as no direct access to private field 
//console.log(user.#password)  //SyntaxError: Private field '#password' must be declared in an enclosing class
userr.updatepassword("12345678")
console.log(userr.checkpassword("12345678"))

//                              abstraction vs encapsulation
/* abstraction
= hide complexity (methods)
= hides implementation details
= achieved by public methods+private helpers
= goal is to show only essential functionality
= error when calling hidden private methods syntaxerror
= true abstract enforcement not possible

   encapsulation
= hides data (fields)
= achieved by private fields and setter/getter
= goal is to protect internal state
= error when accessing private field syntaxerror   
*/


//                                    inheritance
//this is mechanism where one class can reuse properties and methods of another class
//goal us code resuablility and logical hierarchy
//in js it is achieved using extends keyword in es6 classes or prototyping chaining
class animal{       //this is the base/parent class
    constructor(name){
        this.name = name;
    }
    speak(){
        console.log(`${this.name} makes a sound`)
    }
}
class dog extends animal{  //this is derived class from animal
    constructor(name,breed){
        super(name)        //call parent constructor using super keyword otherwise will not access of parent constructor 
        //if child class do not have any constructor then it aumatically inherit parent constructor
        //but when child class has its own contructor then it must use the super keyword to access parent class contructor 
        this.breed=breed
    }
    speak(){  //this is overriding
        console.log(`${this.name} barks`)
    }
}
const newanimal = new animal("creature")
newanimal.speak()  //creature makes a sound
const doggy = new dog("buddy","golden retriever")
doggy.speak()  //buddy barks


//                                   polymorphism
//ability of different classes to provide different implementation of the same method
//same interface different behavior
//achived using method overriding(runtime polymorphism) and method overloading (limited, simulated)
class Shape {
    draw() {
        console.log("Drawing a generic shape...");
    }
}
class Circle extends Shape {
    // Overriding the parent's draw method
    draw() {
        console.log("Drawing a Circle ⭕");
    }
}
class Square extends Shape {
    // Overriding the parent's draw method
    draw() {
        console.log("Drawing a Square ⬜");
    }
}
// Polymorphism in action
const shapes = [new Circle(), new Square(), new Shape()];
shapes.forEach(shape => {
    shape.draw(); // Same method name, different results!
});




//                                   overriding
//when a subclass has its own implementation of a method that is already defined in the parent class
//allow customizing or extending behaviour in derived classes
// Base class
class Vehicle {
  start() {
    console.log("The vehicle starts.");
  }
}
// Derived class overrides the start method
class Cars extends Vehicle {
  start() {
    console.log("The car engine roars to life.");
  }
}
// Another derived class
class Bicycle extends Vehicle {
  start() {
    console.log("The bicycle begins moving as you pedal.");
  }
}
const v = new Vehicle();
v.start(); // ✅ "The vehicle starts."
const c = new Cars();
c.start(); // ✅ "The car engine roars to life."
const b = new Bicycle();
b.start(); // ✅ "The bicycle begins moving as you pedal."


//                                overloading
//having multiple methods with the same name but different parameters list
//in js if you declare two methods with the same name, the last one overwrites the previous one
//Instead, JavaScript achieves similar behavior using:
//               Default parameters
//               Checking argument types/length inside a single method
//               The arguments object or rest parameters (...args)
class Calculator {
  add(...args) {
    if (args.length === 2) {
      return args[0] + args[1];
    } else if (args.length === 3) {
      return args[0] + args[1] + args[2];
    } else {
      throw new Error("Unsupported number of arguments");
    }
  }
}
const calc = new Calculator();
console.log(calc.add(2, 3));       // 5
console.log(calc.add(2, 3, 4));    // 9





