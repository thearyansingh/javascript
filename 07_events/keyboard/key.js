const insert=document.getElementById('insert');
window.addEventListener('keydown',(e)=>{
    insert.innerHTML=`
    <table>
  <tr>
    <th>key</th>
    <th>keycode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key===""?"space":e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
  
</table>`
})