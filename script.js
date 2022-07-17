
const btn = document.getElementById('btn1');

function newList (){
  const title = document.getElementById('title');
  const tache = document.getElementById('tache');
  const newTache = document.createElement('tr');
  const table = "tableau";
  const titleValue = title.value;
  const titleLength = titleValue.length;
  const tacheValue = tache.value;
  const tacheLength = tacheValue.length;
  console.log(titleValue);
  console.log(titleLength);
  console.log(checkbox);
  console.log('titre ' + title.value);
  console.log('tache ' + tache.value);
  const i = 0;
  
  if (tacheLength || titleLength > i){
    newTache.innerHTML = `
    <tr class="" name="${table}"id="" name="nouvelleLigne" value="">
    <td class="btnSup"><input type="checkbox" name="" onclick="(functFini)" id="coche" checked ></td>
    <td name="" class="title">${titleValue}</td>
      <td name="tache" class="descript">${tache.value}</td>
      <td class="btnSup"><button id="btn2" type="reset">supprimer</button></td>
    </tr>
    `;
    
    document.querySelector("table").appendChild(newTache);
  }else{
      alert("veuiller rentrer une nouvelle tache");
    }
  }

  function functFini(){
    if (checked == true){
      contenu.ClassList.add('fini');
    }else{
    contenu.classList.remove('fini');
  }
}

btn.addEventListener("click", newList);

const checkbox = document.getElementById('coche');
checkbox.addEventListener("change", functFini());