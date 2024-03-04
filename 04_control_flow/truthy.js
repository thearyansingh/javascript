const user="aryan@gmail"
if(user){
    console.log("got user email");

}
else{
    console.log("dont have user email")
}
//falsy values
// false, 0 ,-0, bigint, 0n,"",null, NaN, undefined

// truthy values
//"0", 'false , " ", [], {}, functions(){}
if(user.length===0){
    console.log("array is empty")
}
const object={

}
if(Object.keys(object).length===0){
    console.log("object is empty ")

}

// Nullish coalescing Operator (??)null undefined
 let val1;
//  val1=5 ?? 10
// val1= null ?? 10
val1= undefined?? 10


 console.log(val1);
 








































































