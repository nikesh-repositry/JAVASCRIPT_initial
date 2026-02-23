//      node js_essentials/24destructuring
//      destructuring is really important in production
//          destructring with array
//you can put any name while using destructuring with array
let arr1 = ['orange','india','satellite']
let [first,second,third] = arr1
console.log(first)   //orange
console.log(second)  //india
console.log(third)   //satellite

let [pehla,...x] = arr1
console.log(pehla)   //orange
console.log(x)       //[ 'india', 'satellite' ]

//DEFAULT VALUES
let [a,b,c,d=0] = [1,2,3,5]
console.log(a,b,c,d) //here if 5 is not present on right side then default value of d that is 0 would be printed but even nothing is assigned the undefined would be printed

//SKIP ARRAY ITEMS
let [,,cc,,e] = [10, 20, 30, 40, 50];
console.log(cc, e);  //30 50

//SWAPPING VALUES
let a1=5;a2=10;
[a1,a2]=[a2,a1]
console.log(a1,a2)  //10 5

//NESTED ARRAYS
let [a3,,,[x1,y1]] = [1,2,3,[5,6]]
console.log(a3)  //1
console.log(x1,y1)  //5 6







console.log('\n\n')
//              destructuring with objects
//you cannot put any name while destructuring with objects
let obj1 = {
    name:'nikesh',
    location:'noida',
}
let {name,location}=obj1
console.log(name,location) //nikesh noida

//DESTRUCTURING WITH REST OPERATOR
let obj2 = {
    names:'nikesh',
    city:'noida',
    country:'india',
}
let {names,...other}=obj2
console.log(names,other) //nikesh { city: 'noida', country: 'india' }

//DEFAULT VALUES
let {namess,age=18}={   //if age is defined under the object the that will be executed and if no values is assigned at all then undefined will printed
    namess:'nikesh',
    // age:20,
}
console.log(namess,age)  //nikesh 18

//RENAMING VALUES
let {naam: nameplease}={  //you can now use any name for variable through this step
    naam:'nikesh',
}
console.log(nameplease) //nikesh

//NESTED OBJECT
let obj7 = {
    naams : 'nikesh',
    ages: 55,
    address:{
        location:'noida',
        state:'up',
        arr:[1,2,3,4]
    }
}
let {
    naams: aapkanaam, //renamed
    ages,
    address,
    address:{location: city, arr:[aa,...rest]},
}=obj7
console.log(aapkanaam) //nikesh
console.log(ages)      //55
console.log(address)   //{ location: 'noida', state: 'up', arr: [ 1, 2, 3, 4 ] }
console.log(city)      //noida
console.log(aa,rest)   //1 [ 2, 3, 4 ]


//destructuring in function
function add([a,b]){
    console.log(a+b)
}
let arr7=[5,6]
add(arr7)  //11

//object destructuring in function parameters
function greet({name,age}){
    console.log(`hello ${name} you are ${age} year old`)
}
let obj8 = {
    name:"nikesh",
    age:536,
}
greet(obj8)   //hello nikesh you are 536 year old























