// primitive datatype 
// 7 types :- String , Number , Boolean , Null , Undefined , Symbol , BigInt
let email; //undefined 
let number = null 
let a=100;
let b=101.11


const id = Symbol('123')
const anotherId = Symbol('123')
// console.log(id==anotherId);


const bigNum=2444521455n;

// Reference type also called as (Non primitive) datatype
// Array ,Objects , Functions 

let hero =["Superman", "Batman"]
// console.log(hero)

let obj1 ={
    name :"sujal",
    id :101
}
// console.log(obj1);



const myFunction = function(){
    // console.log("Hello World!");
    
}







// Stack (primitive datatype).   Heap(Non-promitive datatype)
 let myYoutubeName = "sujal-edits"
 let anotherName = myYoutubeName
 anotherName="Sujal-Music"
//  console.log(anotherName);
// console.log(myYoutubeName);


let userOne ={
    email: "Sujal@gmail.com",
    id: 123,
}
let userTwo= userOne
userTwo.email = "Sujal-music@gmail.com"
console.log(userOne.email);
console.log(userTwo.email);





