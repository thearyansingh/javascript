const randomcolor=()=>{
    const hex="0123456789ABCDEF"
    let color='#'
    for(let i=0;i<6;i++){
      color+=hex[Math.floor(Math.random()*16)];
     
  
    }
    return color;
  }
  let interval;
  const startchangingcolor=()=>{
  interval=setInterval(changecolour,1000)
  }
  function changecolour(){
    document.body.style.backgroundColor=randomcolor();
  }
  const stopchangingcolor=()=>{
    clearInterval(interval);
  }
  document.querySelector("#start").addEventListener('click',startchangingcolor)
  document.querySelector("#stop").addEventListener('click',stopchangingcolor)