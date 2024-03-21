// const coding=["js","java","cpp","c++"]
//  const values= coding.forEach((item)=>{
// console.log(item);
// return item;
// })
// console.log(values);
// foreach not return any value

// const nums=[1,2,3,4,5,6,,7,8]

// const newNums= nums.filter((num)=>{
//    return num>4;
// })
// console.log(newNums);
// filter is generally used in place of arrow funtion  when aarrow funtion not retutn 
//the value and filter always retun the value when it's written in curly braces

// const NewNums=[]
// NewNums.forEach((num)=>{
// if(num>4){
//     NewNums.push(num)
// }
// })
// console.log(NewNums);
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
  let book= books.filter((num)=>num.genre==='History');
   book=books.filter((er)=>{return er.publish>=2000})
console.log(book);
console.log(book)