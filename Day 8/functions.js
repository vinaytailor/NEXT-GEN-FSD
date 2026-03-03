// function declaration
function add(a,b){
    console.log(a+b);
}
function mul(a,b){
    return a*b;
}
let sum = add(5,6);
console.log(sum)

sum = add(14,16)

let multi= mul(14,16)
console.log(multi)

// function expression 
const sub= function(a,b){
    return a-b;
}
let subtract= sub(9,4)
console.log(subtract)

// arrow function 
let div=(a,b)=>a/b;
let divison = div(4,2);
console.log(divison)

let fullname= function(fname, lname="sir"){
    console.log("Hey my name is "+fname+lname)
}
fullname("Vinay ", "Tailor")

let intro=(name,course,age)=>{
    // console.log("My name is"+name+"and i am doing "+course+", I am "+age+"years old")
    console.log(`Hey my name is ${name} and i am doing ${course} , I am ${age} years old`)
}
intro("Vinay", "BCA", 18)