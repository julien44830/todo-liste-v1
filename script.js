// impossible de recuperer le select a cocher


const btn = document.getElementById('btn1');


//     console.log(`titr;e : ${titleValue}`);
//     console.log(`tache : ${tacheValue}`);
function newList() {
  const title = document.getElementById('title');
  const titleValue = title.value;
  const titleLength = titleValue.length;
  
  const tache = document.getElementById('tache');
  const tacheValue = tache.value;
  const tacheLength = tacheValue.length;
  console.log(tacheLength);
  console.log(titleLength);
  

  const newTache = document.createElement('tr');
  
  if (tacheLength && titleLength > 0) {
    newTache.innerHTML = `
    <tr class="" name="titleValue" id="NewTacheLine " name="nouvelleLigne" value="">
      <td class="btnSup">
    
      <labal for="coche">
        <input type="checkbox" name="${titleValue}" onChange="functFini()" id="coche"></td>
      </label>
    
      <td name="tache" class="title">${titleValue}</td>
      <td name="tache" class="descript">${tacheValue}</td>
      
      <td class="btnSup"><button id="btn2" type="button">x</button></td>
    </tr>
    `;
    
    document.querySelector("table").appendChild(newTache);
    
  }else {
    console.log('titre -> non défini');
    console.log('tache -> non défini');
    alert("Pour créer une nouvelle veuillez rentrer un Titre et une Description"); 
  }
  
}
btn.addEventListener("click", newList);


function functFini(){
  const check = document.getElementById('coche');
  
  if(check.checked === true){
    console.log('checked');
    document.querySelector('h1').classList.toggle("fini");
    document.querySelector("tr.title[id=tache]");
  }else if(check.checked ===false){
    console.log("noChecked");
    document.querySelector('h1').classList.toggle("fini");


  }
}