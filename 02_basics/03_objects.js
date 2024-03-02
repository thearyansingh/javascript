//singelton 
//objects literals
const mykey1=Symbol("aryan")
const user={
    name:"aryan",
[mykey1]:"aman",
    age:18,
    location:"varanasi",
    email:"aryansingh@gmail.com"
    , isloggedIn:false,
}
console.log(user.email)
console.log(user["email"])
console.log(user[mykey1])
user.email="harshit@gmail.com"
Object.freeze(user);
console.log(user["email"])
 user.greeting=function(){
console.log("hello aryan")
 }
 user.greetingtwo=function(){
console.log(`hello js user${this.name}`)
 }
 console.log(user.greeting());
 console.log(user.greetingtwo())
