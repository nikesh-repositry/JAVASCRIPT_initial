console.log("EVENT HANDLING++++++++++++++++++++++++++++++++++")
//inline event handling 
function fun1(){
    alert("hey i am a alert box ")
}
function fun2(){
    document.body.classList.toggle('yellowBG') //here css selection through class name and then toggle method which used to active if inactive and inactive if active
}

//event handling using dom event property
const a1 = document.getElementById("mydiv1")
a1.onmouseover=()=>{
    a1.style.backgroundColor = "aqua"
}
a1.onmouseout=()=>{
    a1.style.backgroundColor = "fuchsia"
}

//event handling using addEventListener
const a2 = document.getElementById('mydiv2')
const a3 = document.getElementById('but1')
const a4 = document.getElementById('but2')
a3.addEventListener('click',function(){
    a2.style.backgroundColor = "yellow"
})
a4.addEventListener('click',()=>{
    a2.style.backgroundColor = "white"
})
//event object
const a5 = document.getElementById('mydiv2')
a5.addEventListener('click', (event) => {
    console.log(event)
})

console.log("features of event object++++++++++++++++++++++++++++++++++++++++++++++++")
const button = document.getElementById('mybutton')
const link = document.getElementById('mylink')
// const span = document.getElementById('myspan')

function logEventProperties(event){ //so here is a function designed to be the evnet handler like its a block of code that runs whenever the associated event occurs like in this is case it is click event and its accepts one argument which is the event object itself and object contains all the info about the event that just happend
    console.log("---event properties---")
    console.log('type:', event.type) //print the type of event that is occured like the type of user interaction like click, keydown etc
    console.log('target:', event.target.tagName); //prints the element that originally triggered the event. this is crucial for event delegation where you have a single listener on a parent element but want to know which child was clicked
    console.log('currentTarget:', event.currentTarget.tagName);//if the listener is on button then event.currentarget will always be the button element regardless of whether you clicked the button itself or the span inside it or any child inside of it
    console.log('clientX:', event.clientX);//prints the horizontal coordinate within the application's client area at which the event occurred (as opposed to the coordinate within the page)
    console.log('clientY:', event.clientY);//prints the vertical coordinate within the application's client area at which the event occurred (as opposed to the coordinate within the page)
    console.log('bubble', event.bubble);//indicates whether the event bubbles up through the DOM or not without this property all events would behave the same way and we would not be able to determine their propagation behaviour
    console.log('cancelable', event.cancelable);//it lets you know if a call to preventDefault() will have any effect on this event if an event is not cancelable then calling preventDefault() will do nothing
    console.log('defaultPrevented', event.defaultPrevented);//a boolean value that indicates whether preventDefault() was called on this event
    console.log('timeStamp', event.timeStamp);//it provides the time at which the event was created in milliseconds since the epoch this can be useful for measuring the time between events or for debugging purposes

    event.stopPropagation() //A method that stops the event from bubbling up to parent elements.
    //It gives you granular control over event flow. If you only want to handle an event on a child element and not its parents, you use this method.
    console.log('stop propagation() was called');
}
button.addEventListener('click', logEventProperties) //here not used logEventProperties() because i just want it to remember the reference of the function to trigger when i the event click is happen on the button and if i used logEventProperties() then its mean calling the function immediately

link.addEventListener('click', (e) => {
    e.preventDefault() //A method that cancels the browser's default behavior for an event. for eg navigation through a link is default behaviour of ahref
    logEventProperties(e)  //calling the function to log event properties
    console.log('preventDefault() was called');
});


console.log("EVENT PROPAGATION++++++++++++++++++++++++++++++++++")
let grandparent= document.querySelector('.grand-parent')
let parent= document.querySelector('.parent')
let child= document.querySelector('.child') 
//below is code for bubbling phase
grandparent.addEventListener('mouseout',()=>{
    alert('grandparent mouseout bubbling')
    console.log('grandparent mouseout bubbling')
})
parent.addEventListener('mouseout',()=>{
    alert('parent mouseout bubbling')
    console.log('parent mouseout bubbling')
})
child.addEventListener('mouseout',()=>{
    alert('child mouseout bubbling')
    console.log('child mouseout bubbling')
})
//below is code for capturing phase
grandparent.addEventListener('dblclick',()=>{
    alert('grandparent double clicked capturing')
    console.log('grandparent double clicked capturing')
},true)
parent.addEventListener('dblclick',()=>{
    alert('parent double clicked capturing')
    console.log('parent double clicked capturing')
},true)          
child.addEventListener('dblclick',()=>{
    alert('child double clicked capturing')
    console.log('child double clicked capturing')
},true)

console.log("new concepts examples+++++++++++")
const a6 = document.getElementById('mydiv3')
const a7 = document.getElementById('mybut1')

a6.addEventListener('click', (event) => {
    alert('parent div clicked')
    console.log('parent div clicked')
    console.log(event)
})
a7.addEventListener('click', (event) => {
    event.stopPropagation() //so here when i click the button the event will not propagate to its parent div and only the button click event will be triggered
    alert('child button clicked event 1')
    console.log('child button clicked event 1')
    console.log(event)
})
a7.addEventListener('click', (event) => {
    alert('child button clicked event 2')
    console.log('child button clicked event 2')
    console.log(event)
})

const a8 = document.getElementById('mydiv4')
const a9 = document.getElementById('mybut2')

a8.addEventListener('dblclick', (event) => {
    alert('parent div clicked')
    console.log('parent div clicked')
    console.log(event)
})
a9.addEventListener('dblclick', (event) => {
    event.stopImmediatePropagation() //so here when i click the button the event will not propagate to its parent div and only the button click event will be triggered
    alert('child button clicked event 1')
    console.log('child button clicked event 1')
    console.log(event)
})
a9.addEventListener('dblclick', (event) => {
    alert('child button clicked event 2')
    console.log('child button clicked event 2')
    console.log(event)
})

console.log("EVENT PROPAGATION++++++++++++++++++++++++++++++++++")
//prints the element that originally triggered the event. this is crucial for event delegation where you have a single listener on a parent element but want to know which child was clicked
document.getElementById('menu').addEventListener('click', (e)=>{
    const target = e.target; // Get the clicked element
    if(target.tagName === 'LI'){   //this line ensures that only clicking the list item response and prevent the parent div to react to the user interaction 
        switch(target.dataset.action){ //this(dataset action) attributes allow you to store custom data on HTML elements. These attributes are ignored by the browser but accessible via JavaScript
            case 'home':
                alert('home clicked')
                console.log('home clicked')
                break;
            case 'about':
                alert('about clicked')
                console.log('about clicked')
                break;
            case 'contact':
                alert('contact clicked')
                console.log('contact clicked')
                break;
            default:
                console.log('click a list item, but no specific action is defined')
                alert("read the console developer tools")   
        }
    }

})

