
//array

const array=[0,1,2,3,4,5, true , "aryan"]

console.log(array[0])

array.push(6)
console.log(array)

array.unshift(9)

console.log(array.includes(9));
console.log(array.indexOf(3))
const newarr=array.join()
console.log(array)
console.log(newarr);
 
//slice and splice
console.log("A", array);
const myn1=array.slice(1,3) // slice is used to print from start range to before last range
console.log(myn1)
console.log("B",array)

const myn2= array.splice(1,3)  // in  splice we remove the given range of index and print the remmaining one
console.log("B",array)
console.log(myn2)

