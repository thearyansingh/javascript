// function addNumber(num1,num2){
//  return num1 +num2
// }
// const result=addNumber(3,5)
// console.log(result)

// function loginUser(userName){
//     if(userName===undefined){
//         console.log("please enetr userName")
//         return  
//      }
//      return`${userName} just logged in`
   

// }
const user={
    username:"aryan",
    price:"199"
}
function handle(user){
console.log(`username is${user.username} and price is ${user.price}`)

}
handle(user)

handle({
    username:"sam",
    price:399
})
const myNewArray=[200,400,100,600]
function returnSecond(getArray){
return getArray[1]
}
console.log(returnSecond(myNewArray))




