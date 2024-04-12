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
interval=setInterval(changingColor,2000)
  }
  const changingColor=()=>{
document.body.style.backgroundColor=randomcolor()
  }
  const stopchangingcolor=()=>{
    clearInterval(interval)
  }
  document.querySelector("#start").addEventListener('click',startchangingcolor)
  document.querySelector("#stop").addEventListener('click',stopchangingcolor)