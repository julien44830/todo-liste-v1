
const btn = document.getElementById('btn1');
// non fonctionnelle
// if (keycode == 32){
//   newList()
// }

function newList() {
  const title = document.getElementById('title');
  const titleValue = title.value;
  const titleLength = titleValue.length;


  const tache = document.getElementById('tache');
  const tacheValue = tache.value;
  const tacheLength = tacheValue.length;
  console.log(tacheValue);
  console.log(tacheLength);


  const table = "tableau";
  const newTache = document.createElement('tr');



  if (tacheLength && titleLength > 0) {
    newTache.innerHTML = `
    <tr class="" name="titleValue"id="" name="nouvelleLigne" value="">
    <td class="btnSup">
    
    <labal for="coche">
    <input type="checkbox" name="${titleValue}" onChange="(functFini)" id="coche"></td>
    </label>
    
    <td name="titleValue" class="title">${titleValue}</td>
    <td name="tache" class="descript">&#10132 ${tache.value}</td>
    <td class="btnSup"><button id="btn2" type="reset">x</button></td>
    </tr>
    `;

    document.querySelector("table").appendChild(newTache);

    // ajout de l'évènement dans la fonction car sinon l'élément n'éxiste pas et revois une erreur 
    const checkbox = document.jquerySelector('btnSup'.checked)=false;
    
    if (checkbox){
      checkbox.addEventListener("click", function (e) {
        alert('changed');})
      }
      
      console.log(titleValue);
      console.log(titleLength);
      console.log(checkbox.checked);
  
  }else {
      alert("Pour créer une nouvelle veuillez rentrer un Titre et une Description");
      console.log('titre -> non défini');
      console.log('tache -> non défini');
  }

}
function functFini() {
  if (checked == true) {
    contenu.ClassList.add('fini');
  } else {
    contenu.classList.remove('fini');
  }
}



btn.addEventListener("click", newList);
// erreur sur l'écouste de l'évènement
// checkbox.addEventListener("Change", functFini());