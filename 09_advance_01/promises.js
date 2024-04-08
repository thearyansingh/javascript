//   const promises=new Promise (function(resolve,reject){
//     setTimeout(function(){
//         console.log('async task is completed')
// resolve();
//     },1000)
//   })
//   promises.then(function(){
//     console.log("promise consumed");
//   })
  new Promise(function(resove,reject){
    setTimeout(function(){
        console.log("async task 2")
        resove();
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
  
