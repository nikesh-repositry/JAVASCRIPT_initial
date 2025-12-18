// // alert("HELLO");
// // confirm("you are a human","remember");
// // prompt("say your name");
// let userName = prompt("Please enter your name:", "Guest");

// if (userName !== null) {
//   alert("Hello, " + userName + "!");
// } else {
//   alert("User cancelled.");
// }
//alert confirm and prompt
const userName = prompt("what is your name buddy","guest001");
if (userName !== null){
    const planetName = confirm("DO YOU LIVE IN EARTH");
    if (planetName == true){
        alert("save your planet men before its to late");
    }    
    else {
        alert("how do you even exist pal");
    }        
}
else{
    alert("i will find you ");
}