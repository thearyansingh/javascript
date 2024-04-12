  const promises=new Promise (function(resolve,reject){
    setTimeout(function(){
        console.log('async task is completed')
resolve();
    },1000)
  })
  promises.then(function(){
    console.log("promise consumed");
  })
  new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("async task 2")
        resolve();
    },1000)
  }).then(function(){
    console.log("wait for that ")
  })
  const promiseThree=new Promise(function(resolve,reject){
    setTimeout(function(){
resolve({username:"chai",email:"singharyan5656.gmail.com"})
    },1000)
  })
  promiseThree.then(function(user){
    console.log(user)
  })
  const PromiseFour= new Promise(function(resolve,revoke){
setTimeout(function(){ 
  let error = false
  if(!error){
    resolve({username:"chai",email:"singharyan5656.gmail.com"})

  }
  else {
    revoke("error")
  }
},1000)

  })
  PromiseFour
  .then((user)=>{
    console.log(user);
    return user.username
  }).then((username)=>{
    console.log(username);

  }).catch(function(error){
  console.log(error);
  }).finally(()=>console.log("the promise is either resolve or rejected"))


  const promiseFive= new Promise(function(resolve,reject){
 setTimeout(function(){
  let error =true;
  if(!error){
    resolve({username:"chai",email:"singharyan5656@.gmail.com"})

  }
  else {
    reject("error")
  }
 },1000)
  });
  
  async function consume(){   // directly cant handle the program
  try{
    const response =await promiseFive
    console.log(response)
  }
  catch(error){
    console.log(error)
  }
  } 
  consume()

  async function getusers(){
try {
  const response=  await fetch('https://jsonplaceholder.typicode.com/users')
  const data= await response.json()
  console.log(data);
} catch (error) { 
  console.log("E:",error)
}
  }
  getusers()
 
