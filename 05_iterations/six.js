//const coding =["java", "cpp","python","ruby"]

// const value = coding.forEach((items)=>{
//     console.log(items);
 //       return ClipboardItem;
// })
// console.log(value);






const Mynums =[1,2,3,4,5,6,7,8,9,10]

// const newNums = Mynums.filter((nums)=>(nums>4))
// console.log(newNums);


// when using scope in arrow function have to return the condition other wise it will give empty array 

// const Mynums1 =[1,2,3,4,5,6,7,8,9,10]
// const newNums2 = Mynums1.filter((num)=>{
//     return num>4;
// })
// console.log(newNums2);

//if you want to use for each loop 
const newNum =[]

Mynums.forEach((num)=>{
    if (num>4) {
        newNum.push(num)
        
    }
})

console.log(newNum);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter( (bk) => bk.genre === 'History')

  userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"
})
  console.log(userBooks);