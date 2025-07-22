
// object literals
const object={
    username:"aryan",
    logincount:5,
    signIn:true,
    // getuser:function(){
    //     // console.log("hello")
    //     // console.log(`username ${this.username}`)// jbb bahar se kisi object ko appoint kerna ho
    //     // console.log(this)
    // }

}
// console.log(object.username)
// console.log(object.getuser())


// constructor function 
function user(username,login,islogin){
    this.username=username,
    this.logincount=login,
    this.signIn=islogin
// return this
}

const userone=new user("aryan",6,true)
const usertwo= new user("harsh",4,true)
console.log(userone);
console.log(usertwo)