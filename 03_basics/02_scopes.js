
if(true){
    let  a=10;
    const b=20;
    var c=30;
}
console.log(a);
console.log(b);
console.log(c);

// functions in scopes***************
// nested Scope****************

function one(){
    const userName="aryan"
    function two(){
        const website="youtube"
        console.log(userName);
    }
   
    two()
}
one()
if(true){
    const userName="aryan";
    if(userName==="aryan"){
        const website="youtube"
        console.log(userName+website);

    }
    // console.log(website);
}
// console.log(userName);
//****************intersting************** */
console.log(addone(3))
function addone(num){
    return num +1;

}
console.log(number(3))// it will give you error because you cant declare variable befone function declaration
const number= function(num){
    return num+2;
}


