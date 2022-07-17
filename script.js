
const btn = document.getElementById('btn1');
const contenu = document.getElementsByName('tache');


function newList (){
  const title = document.getElementById('title');
  const tache = document.getElementById('tache');
  const newTache = document.createElement('tr');
  const table = "tableau";
  let checkbox = document.getElementsByClassName('btnSup');
  console.log(checkbox.checked);
  const titleLong = title.lenght;

  if (titleLong <= 0){
    newTache.innerHTML = `
    <tr class="" name="${table}"id="" name="nouvelleLigne" value="">
      <td class="btnSup"><input type="checkbox" name="" onclick="(functFini)" id="coche" ></td>
      <td name="" class="title">${title.value}</td>
      <td name="tache" class="descript">${tache.value}</td>
      <td class="btnSup"><button id="btn2" type="reset">supprimer</button></td>
    </tr>
    `;
    
      document.querySelector("table").appendChild(newTache);
      console.log('titre ' + title.value);
      console.log('tache ' + tache.value);
  }else{
    alert("veuiller rentrer une nouvelle tache");
  }
}

function functFini(){
  if (checked == false){
    contenu.ClassList.add('fini');
  }else{
    contenu.classList.remove('fini');
  }
}

btn.addEventListener("click", newList);
// checkbox.addEventListener("click", functFini);
console.log("tr");
console.log("h1");




