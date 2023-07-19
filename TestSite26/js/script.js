/*
let a= [1,3,'class',true];

console.log(a)

// console.log(a[0])
console.log(a[0])

a[1]="tan"

console.log(a)

console.log(typeof(a))//type of array is object

// a=a.toString();

console.log(a.toString())
console.log(typeof(a))

console.log(a.join('-'))

console.log(a)

console.log(a.pop())

console.log(a)

console.log(a.push("weare"))
console.log(a)

console.log(a.shift())
console.log(a)

console.log(a.unshift("23"))
console.log(a)

let r=a.unshift(3)
// console.log(r,a)

console.log(delete(a[3]))
console.log(a)

let a2 = [1,'kio',2.2]

let a4= a.concat(a2)

console.log(a)
console.log(a.concat(a2))
console.log(a4)

// let txt

// for(let x of a)
// {
//     txt += x + "<br>"
// }

// document.getElementById('we').innerHTML= txt

console.log(a.sort())
*/

let arr = [4,2,7]

let compare = (a,b) => {
    return a-b
}

arr.sort(compare)
console.log(arr)

let a6= [3,5,6,8,3,67,8,9]

// let sliced = a6.slice(3,5)
// let sliced = a6.slice(3)
// console.log(sliced)
// console.log(a6)

console.log(a6)
// let deleteVal = a6.splice(2,3,100,100,100,100)
let deleteVal = a6.splice(2,3,100,100)
console.log(deleteVal)
console.log(a6)

console.log(a6.reverse())

let a7 = [3,5,6,8,3,67,8,9]

//Map- Map creates a new array by performing some operations on each array element
let p=a7.map((value)=>{
    console.log(value)
    return value+1
})

console.log(p)

let q=a7.map((value) => {
    // return value**2
    // return value*value
    return Math.pow(value,2)    
})

console.log(q)
//Filter- filters an array with values that passes the test, it will form a new array
let a10 = a7.filter((k) => {
    return k<7
})

console.log(a10)

//Reduce- reduces an array to single value
let a12= a7.reduce((a1,a2) => {
    return a1+a2
})

console.log(a12)