function newList (titre, tache){
  const newTache = document.createElement("tr");
  
  newTache.innerHTML = `
  <tr>
    <th>titre de la tache</td>
    <th>déscription de la tache</th>
  </tr>
  <br>
  <tr>
    <td class="btnSup"><input type="checkbox" id="coche"></th>
    <td class="title">${titre}</td>
    <td class="descript">${tache}</td>
    <td class="btnSup"><button id="btn2">supprimer</button></td>
  </tr>`;

  document.querySelector("table").appendChild(newTache);
}

newList ('code todoListe' + 'continuer à coder');