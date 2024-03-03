const user={
    name:"aryan",
    price:999,
    welcomeMessage:function(){
        //this is use for the current context
        console.log(`${this.name},welcome`)
    }
}
// user.welcomeMessage()

// const chai =()=>{
// let userName="aryan"
// console.log(this)
// }
// chai()
 
const add=( num1,num2)=> num1+num2
const object=()=> ({username:"aryan"})
console.log(add(3,4))
console.log(object())