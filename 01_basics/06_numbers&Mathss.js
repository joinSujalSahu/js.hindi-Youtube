//****************************************** Numbers *************************************
const score = 100
// console.log(typeof score);

const balance = new Number(200)
// console.log(balance);


// properties of string 
// console.log(balance.toString().length);
// console.log(balance.toFixed(2));


const otherNumber = 123.454
//console.log(otherNumber.toPrecision(5));


const countZeros = 1000000
//console.log(countZeros.toLocaleString());  //  by United state standards 
//console.log(countZeros.toLocaleString('en-IN')); //  by Indian standards



//++++++++++++++++++++++++++++++++++++++++ Maths +++++++++++++++++++++++++++++


// console.log(Math)

// console.log(Math.abs(-3));  // returns absoulute value   always positive 
// console.log(Math.pow(5,2)); // return power of 5 which is 25
// console.log(Math.round(4.5)); // returns the round value 
// console.log(Math.ceil(4.1)); // returns the top value 
// console.log(Math.floor(4.5)); // returns the floor value 
// console.log(Math.min(3,4,5,6,2,7)); // finds minimum in the array 
// console.log(Math.max(3,4,5,6,2,7)); // finds maximum in the array 

// console.log(Math.random());

// console.log((Math.random()*10+1));

const min = 10
const max = 20
console.log(Math.floor(Math.random()*(max -min +1))+min);





