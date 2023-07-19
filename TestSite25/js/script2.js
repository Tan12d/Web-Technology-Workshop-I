let x= document.getElementById('a')

console.log(x)

// document.write(x)

// .innerHTML

// a.innerHTML = "This is dynamic element"
// console.log(a)
// x.innerHTML = "This is dynamic element"
// console.log(x)

//getElementById
//getElementByClassName
//getElementByTagName
//getElementQuerySelector

a1.innerHTML= "me too"

let a2= document.getElementById('a1')
a2.style.backgroundColor = 'aqua'


let c= document.getElementsByClassName('a3')
console.log(c)
c[1].innerHTML = "#we are one"

let d= document.querySelector('p')
d.style.color= 'red'