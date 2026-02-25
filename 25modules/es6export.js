function sum(a,b){
    return a+b
}
function mul(a,b){
    return a*b
}
function sub(a,b){
    return a-b
}
function modulo(a,b){
    return a%b
}
export function divide(a,b){
    return a/b
}

export default{   //es6 default export and import modules
    sum,
    mul,
}

export{           //es6 named export and import module
    sub,
    modulo,
}
