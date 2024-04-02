const form=document.querySelector('form')
const guides=document.querySelector('#guide');
form.addEventListener('submit',(e)=>{
   e.preventDefault();
   const height= parseInt(document.querySelector('#height').value)
   const weight= parseInt(document.querySelector('#weight').value)
   const result=document.querySelector('#results');

   if(height===''|| height<0|| isNaN(height)){
    result.innerHTML="please enter a valid height";
   }
  else if(weight===''||weight<0||isNaN(weight)){
    result.innerHTML="please enter a valid weight"
  }
  else{
    const formula=(weight/((height*height)/10000)).toFixed(2);
    
    result.innerHTML=`BMI is ${formula}`;
  

  if(formula<=18.6){
    guides.innerHTML="underweight"
  }
  else if(formula>=18.6 && formula<=24.9){
    guide.innerHTML="normal range"
  }
  else{
    guide.innerHTML="overweight"
  }
}

})
