
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++BASIC+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//HOW TO SELECT ANY HTML ELEMENT THROUGH JS===================================================================
//using document.queryselector()
let a = document.querySelector("h1")
console.log(a)

//HOW TO CHANGE AND MANIPULATE HTML THROUGH JS=================================================================
//using .innerHTML property
let b = document.querySelector("p")
console.log(b)
b.innerHTML="yes buddy this is a paragraph which is just got changed"

//HOW TO CHANGE THE CSS THROUGH JS============================================================================
//using .style property 
b.style.color="white"
b.style.backgroundColor="green"

//EVENT LISTENER IN JS==========================================================================================
//syntax is: addEventListener(action,function)
b.addEventListener('mouseover',()=>{
    b.innerHTML="yhh dude now this paragraph get changed again"
    b.style.color="orange"
    b.style.backgroundColor="pink"
    b.style.border="2px solid black"
})
console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")



//                                                             NODELIST

console.log("nodelist")

let jj = document.querySelectorAll("#mylist li")
console.log(jj)//this will print the nodelist in the console terminal

jj.forEach(item => {                   //this is the foreach loop applied in because of nodelist where each element can be access through and perform operation
    item.style.backgroundColor="blue"
    item.style.color="red"
});

console.log(jj[1].childNodes) //this is how you can access any childnode of the nodelist

const parent = document.getElementById('mylist') //41,42,43 these three line shows the execution of live nodelist 
const children= parent.childNodes;   //i have not used the queryselectorall because childnode is not the property of the wholelist
console.log(children) //The childNodes property is a feature of a single DOM element, not a collection of elements
//also in the console the output contains the word "text" because the  whitespace between HTML tags is also considered a text node by the browser's Document Object Model (DOM).
//nodelist can be convert into a array





console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")
//                                                        SELECTION OF HTML
//getElementId()
const aa = document.getElementById("first")
console.log(aa)
const a2 = document.getElementById("second")
console.log(a2)
//getElementByTagName()
const a3 = document.getElementsByTagName('h2')
console.log(a3)      
a3[0].style.backgroundColor='yellow'
console.log(a3[2].innerText) 
//getElementByClassName()
const a4 = document.getElementsByClassName('myclass')
console.log(a4)   
Array.from(a4).forEach(Element=>Element.style.backgroundColor='purple')  //here the htmlcollection first gets convert into an array then we applied the foreach loop otherwise we can do it via simple loop
//this foreach by converting into array can be done same for getelementbytagname
//querySelector()
const a5 = document.querySelector("input[type='email']")
console.log(a5)
a5.style.border="2px solid orange"
//document.querySelector can be implemented as using ID, class, tag, attribute, nested, pseudo-class
//documen.querySelectorAll()
const a6 = document.querySelectorAll(".mymy")
console.log(a6)
if(a6.length = 2){
    a6[2].style.backgroundColor="green"
}
const a7 = document.querySelectorAll(".mymy")[1]
console.log(a7)
a7.style.backgroundColor='orange'



console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")
//                                    manipulating the html
//                                    tagname
//it just returns the tagname of the element 
const a8 = document.getElementById("mybutton")
console.log(a8.tagName)
const allelem  = document.body.children;
for(let child of allelem){
    if(child.tagName==="BUTTON"){
        console.log("found the button",child.id)
    }
}
//                                     nodename
//it just return the nodename of the element nodes all types
const a9 = document.getElementById('myhead2')
console.log(a9.nodeName)
let child = a9.firstChild;
while(child){
    console.log(child.nodeName);
    child = child.nextSibling;
}
//                                     innerText
//it return and set the visible content of the element
const a10 = document.getElementById('mydiv5')
console.log(a10.innerText)
a10.innerText="new visible content"
console.log(a10.innerText) //setting up the new text in the element 
//                                      textcontent
//it sets and gets all the text plain content. 
const a11 = window.document.getElementById('mydiv6')
console.log(a11.textContent) //displaying all content
a11.textContent="this is the new content "
console.log(a11.textContent)
//                                      innerhtml
//it set and gets html content
const a13 = window.document.getElementById('mydiv7')
console.log(a13.innerHTML)
a13.innerHTML= '<ul><li>item no 1</li><li>item no 2</li></ul>'
console.log(a13.innerHTML)
//                                    example for clearity
const a12 = document.querySelector("#myp")
console.log("innertext="+a12.innerText)
console.log("textcontent="+a12.textContent)
console.log("nodename="+a12.nodeName)
console.log("innerhtml="+a12.innerHTML)
console.log("tagname="+a12.tagName)


console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")
//                               INSERTION/ADDITION OF ELEMENT
//STEP = 1 is creating the element which would be inserted
const a15 = document.createElement("li")
      a16 = document.createElement("li")
      a17 = document.createElement("li")
      a18 = document.createElement("li")
      a19 = document.createElement("li")
a15.textContent="node.append(elem)"
a16.textContent="node.prepend(elem)"
a17.textContent="node.before(elem)"
a18.textContent="node.after(elem)"
a19.textContent="node.insertAdjacentElement(position,elem)"      
//STEP = 2 is to use the method to append the created element according to the requirement
//                                    1.node.append(elem)
document.getElementById("myol1").append(a15)
// document.querySelector("#myol1").append(a15)
//                                    2.node.prepend(elem)
document.getElementById("myol1").prepend(a16)
//                                    3.node.before(elem)
document.getElementById("myol1").before(a17)
//                                    4.node.after(elem)
document.getElementById("myol1").after(a18)
//                                    5.node.insertAdjacentElement(position,elem)
document.getElementById("myol1").insertAdjacentElement("afterbegin",a19)
//                                    6.node.remove()
document.getElementById("my1").remove()


console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")
//                                   PARENT RELATED DOM METHODS                           
//these are the parent related dom methods which are used to manipulate the children of the parent node specific
//                                    1.node.parentNode
console.log(a19.parentNode)// this method is used for debugging by inspecting, dev tools show live DOM
//                                    2.parent.replaceChild(newChild, oldChild)
const container = document.getElementById("mydiv8")
const new1 = document.createElement("p")
new1.textContent="this is a new para B by using replaceChild B replace A"
const old1 = document.getElementById("myp1")
container.replaceChild(new1,old1)
//                                    3.parent.appendChild(child)
const myp1 = document.getElementById("myp1")
container.appendChild(old1) /* here in this code if i put myp1 instead of old1 then 
                             it will throw typeerror because the myp1 removed from 
                             the dom tree but still in the memory so this is like 
                             trying to append a non existing node to fix it i used 
                             the old1 reference which is still a vaild node object 
                            as you are not querying the dom again instead you are 
                            reusing the reference. the dom does not care that the 
                            node was removed earlier - it will happily reinsert it 
                            but if the old1 no longer available no reference of p 
                            would be available in the memory then it cannot be restored*/ 
//                                    4.parent.insertBefore(newNode, referenceNode) 
const new2 = document.createElement("p") 
new2.textContent="this is also a new paragraph C for insertBefore example and para A is eg of appendchild" 
container.insertBefore(new2,old1) 
//                                    5.parent.removeChild(child) 
const p1 = document.getElementById("myp2")
container.removeChild(myp2)                     
console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")
//                                      ATTRIBUTES
console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")
//                                       MANIPULATING OF CSS
//1. using setAttribute()
const a20 = document.getElementById("mydiv9")
a20.setAttribute("style","width:100px; height:100px; color:black; background-color:violet; ")
console.log(a20.getAttribute("style"))
//2. using .style property
const a21 = document.getElementById("mydiv10")
a21.style.color="white"
a21.style.width="100px"
a21.style.height="100px"
a21.style.backgroundColor="blue"
//3. using .cssText property
const a22 = document.getElementById("mydiv11")
a22.style.cssText="color=black; width:100px; height:100px; background-Color:green"
//4. using .className property
const a23 = document.getElementById("mydiv12")
a23.className="orangebox"
//5. using .classList property
const a24 = document.getElementById("mydiv13")
a24.classList.toggle("orangebox")
console.log(a24.classList.contains("orangebox"))
