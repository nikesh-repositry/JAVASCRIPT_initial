//       node js_essentials/23spreadandrest      
//spread operator
//use cases
//1. spread the elements of array
let arr1 = [1,2,3,4]
console.log(...arr1)      //1 2 3 4
//2. add elements including elements of another array
let arr2 = [...arr1,5,100,"nikesh"]
console.log(arr2)         //[ 1, 2, 3, 4, 5, 100, 'nikesh' ]
//3.shallow copy
let arr3 = [...arr1]
arr3.push(50)
console.log(arr1) //[ 1, 2, 3, 4 ]
console.log(arr3) //[ 1, 2, 3, 4, 50 ]
//4.merge array
let arr4 = [5,6,7,8,9,0]
let arr5 = [...arr1,...arr4]
console.log(arr5) //[1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
//5.spread string
let str1 = "nikesh kumar"
let arr6 = [...str1]
console.log(...str1) //n i k e s h   k u m a r
console.log(arr6) /*[
  'n', 'i', 'k', 'e',
  's', 'h', ' ', 'k',
  'u', 'm', 'a', 'r'
] */
//6.spread in function
let roles = ['SDE','QA','TESTER']
function f1(a,b,c){
    console.log(a)
    console.log(b)
    console.log(c)
}
f1(...roles)
//7.spread in object
let obj1 = {
    name: 'nikesh',
    city: 'noida',
}
let obj2 = {...obj1}
obj2.name='kumar'
console.log(obj1)   //{ name: 'nikesh', city: 'noida' }
console.log(obj2)   //{ name: 'kumar', city: 'noida' }
let obj3 = { 
    ...obj1,
    role:'sde',
}
console.log(obj3)  //{ name: 'nikesh', city: 'noida', role: 'sde' }
//8.merging objects
let obj4={
    name:'nikesh'
}
let obj5={
    pet:'no one'
}
let obj6={
    ...obj4,
    ...obj5,
}
console.log(obj6)  //{ name: 'nikesh', pet: 'no one' }









console.log(`\n \n rest operator`)
//REST OPERATOR
//use cases
//1.rest in function
function sum(...x){  //any number of arguments could pass here
    let result =x.reduce((acc,pre)=>{
        return acc+pre
    })
    return result
}
console.log(sum(1,2,3,4,5,6,7,8,9))  //45

//destructuring with rest is available in another folder 









