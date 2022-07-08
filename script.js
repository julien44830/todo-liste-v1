
const btn = document.getElementById('btn1');


function newList (title, tache){
  title = document.getElementById('title');
  tache = document.getElementById('tache');
  
  const newTache = document.createElement('tr');

  newTache.innerHTML = `
  <tr id="newList" value="1">
    <td class="btnSup"><input type="checkbox" name="" id="coche"></td>
    <td class="title">${title.value}</td>
    <td class="descript">${tache.value}</td>
    <td class="btnSup"><button id="btn2">supprimer</button></td>
  </tr>`;
  
  document.querySelector("table").appendChild(newTache);
  console.log(title.value);
}


btn.addEventListener("click", newList);




