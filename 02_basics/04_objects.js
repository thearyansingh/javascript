//with the help of constructor

// const tinderUSer= new Object()
const tinderUser ={
}
tinderUser.id="123"
tinderUser.name="aryan"
tinderUser.isLoggedIn="false"

console.log(tinderUser)

const regularUser={
    email:"some@gmail.com",
    fullname:{
        first:"aman",
        last:"singh",

    }
}
console.log(regularUser.fullname.first);
//to print or merge the objects
const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
// const obj3=Object.assign({},obj1,obj2)
const obj3={...obj1,...obj2}

// console.log(obj3);
const users=[
    {
        id:1,
        email:"h@gmail.com"
    },
    {

    },
    {

    }
]
users[1].email
console.log(tinderUser)
console.log(Object.values(tinderUser));

console.log(tinderUser.hasOwnProperty('kajal'))// to check weater it exist or not

const course={
    courseName:"javascript"
   , price:"999",
   courseInstructor:"hitesh"
}
const {courseInstructor:Instructor}=course
console.log(Instructor)
// {
//     "name":"aryan",
//     "courseName":"js in hindi"
//     ""
// }
[
    {},
    { },
    {}
]




