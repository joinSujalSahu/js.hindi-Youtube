// Immediately Invoked Function Expressions (IIFE)


(function chai (){
    console.log(`Db connected`);
    
})();


// arrow functions with iife
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('sujal');


((user1,user2) =>{
    console.log(`this db is connectes by two users user one is ${user1}, and user two is ${user2}`);
})('sujal','ritwik');
