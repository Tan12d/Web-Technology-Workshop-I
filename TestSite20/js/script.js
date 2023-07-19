// console.log("Hello")
// console.log(2022)
// console.log(null)
// console.log([1,2,3])
// console.log({class:'Web Technology',language:'javascript'})
// console.log("Hello")
// console.warn("This is warning message")
// console.clear()
// console.time();
// for(i=0;i<100;i++)
// {
//     console.count(i);
// }
// console.timeEnd();

// 2
// types of variables
// 1.var 2.let 3.const

// Rules for choosing the variable
// var must begin with a letter ,$ or _
// javascripts reserved words cannot be used as a name of variables
// variables are case sensetive
// There are 7 types of data types in js
// null, number, string, symbol, undefined, boolean, big int

// var vs let vs const

// var is globally scoped while let and const are block scope
// var can be updated and redeclared within its scope, let can be updated but not redeclared , const can neither be updated nor be redeclared
// var variables are initialized with undefined where as let and const are not initialized.
// const must be initialized during declaration unlike let and var


// var a=10
// var b=20
// console.log(a)
// {
//     var a=30
//     console.log(a)
// }
// console.log(a)

// {
    
// let a = 30
// console.log(a)
// }


//let can be updated
// {
//     let a =5;
//     console.log(a);
//     a=7
//     console.log(a)
// }

// {
//     const a=8 // must be initialized
// console.log(a)
// //a=9  //warning // cant be updated
// }


// let b
// console.log(b)


//object
// const item={
//     name:"Tanmoy",
//     Subject:"WTW",
//     Number: 123456
// }
// console.log(item)


//equation and condition
var a=60;
var b=30;
//arithmetic
console.log("The value of a+b is =" + (a+b))
console.log("The value of a-b is =" + (a-b))
console.log("The value of a*b is =" + (a*b))
console.log("The value of a%b is =" + (a%b))
console.log("The value of a++ is =" + (a++))
console.log("The value of ++a is =" + (++a))
console.log("The value of a-- is =" + (a--))
console.log("The value of --a is =" + (--a))


//assignment operator
console.log("The value of a+b is =" + (a+=b))
console.log("The value of a-b is =" + (a-=b))
console.log("The value of a*b is =" + (a*=b))
console.log("The value of a%b is =" + (a%=b))
console.log("The value of a/b is =" + (a/=b))
console.log("The value of a^b is =" + (a**=b))


//comparison operator
let x=5;
let y=6;
console.log("Comparion")
console.log("The x==y is =" + (x==y))
console.log("The x!=y is =" + (x!=y))
console.log("The x===y is =" + (x===y))
console.log("The x!==y is =" + (x!==y))
console.log("The x>y is =" + (x>y))
console.log("The x< is =" + (x<y))
console.log("The x>= is =" + (x>=y))
console.log("The x<=y is =" + (x<=y))

//logical operator
console.log("logical")
if(x<0)
{
    console.log("The value of x is less than 0")
}
else if(x>0 && x<5)
{
    console.log("The value of x is less than 5")
}
else{
    console.log("The value of x is greater than 5")
}


// practice
//Q1
let p= "tan"
let q=2
console.log(p+q)

//Q2
console.log(typeof(p+q))

//Q3
//no


// Q4

var item={
        name:"  Tanmoy",
        Subject:"WTW",
        Number: 82682
    };
    console.log(item)
    

    item[2]=
    {
        
        name:"Tanmoy",
        Subject:"WTW",
        Number: 526278
    }
    var value= item[2];
    console.log(item[2])


item["sem"]="5th"
console.log(item)


//Q5

const dict={
    word : "meaning",
}

dict["word2"]="meaning"
dict["word3"]="meaning"
dict["word4"]="meaning"
dict["word5"]="meaning"
console.log(dict)
console.log(dict.word3)
