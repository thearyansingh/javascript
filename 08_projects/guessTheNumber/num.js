let random=parseInt(Math.random()*100 +1)
const guessField=document.querySelector('#guessField');
const submit= document.querySelector('#subt');
const guesses =document.querySelector('.guesses');
const remaining=document.querySelector('.lastResult');
const lowOrHi=document.querySelector('.lowOrHi');
const startOver=document.querySelector('.resultParas');
let p= document.createElement('p');
let array=[];
let numguess=1;
let playGame=true;
if(playGame)
 {
submit.addEventListener('click',(e)=>{
e.preventDefault();
const guess=parseInt(guessField.value);
validateGuess(guess);
})
 }
 function validateGuess(guess){
if(isNaN(guess)){
    alert("please enter a valid number")
}
else if(guess<1){
    alert("please enter a valid number")
}
else if(guess>100){
    alert("please enter a number below 100")
}
else{
    array.push(guess);
    if(numguess===11){
displayguess(guess)
displaymessage(`Game Over random Number was ${random}` )

endGame();
    }
    else{
        displayguess(guess);
        checkguess(guess);
    }
    }
 }
 function checkguess(guess){
if (guess===random ){
    displaymessage("you gessed  it right ")
endGame();
}
else if(guess<random){
displaymessage("Number is TOO LOW")
}
else if(guess>random){
    displaymessage("Number is TOO HIGH")
}

 }
 function displayguess(guess){
guessField.value='';
guesses.innerHTML +=`${guess}  `
numguess++;
remaining.innerHTML=`${11-numguess}`;

 }
 function displaymessage(message){
lowOrHi.innerHTML=`<h2>${message}</h2>`
 }
 function endGame(){
guessField.value=''
guessField.setAttribute('disabled','')
p.classList.add('button')
p.innerHTML='<h2 id ="newGame">Start new Game</h2>'
startOver.appendChild(p)
playGame=false;
startGame()
 }
 function startGame(){
const newButton=document.querySelector('#newGame')
newButton.addEventListener('click',function(){
   random=parseInt(Math.random()*100 +1)
   array=[]
   numguess=1
guesses.innerHTML=''
remaining.innerHTML=`${11-numguess}`;
guessField.removeAttribute('disabled')
startOver.removeChild(p);
playGame=true
})
 }


