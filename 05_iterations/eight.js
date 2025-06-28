const mynum = [1,2,3]
 // using function 
// const totalnum = mynum.reduce(function(acc ,currval){
//     console.log(`acc:${acc} and currval:${currval}`);
//     return acc+currval
    

// },0)


//using arrow function 

const totalnum = mynum.reduce((acc,currval)=> acc+currval,1)

console.log(totalnum);
