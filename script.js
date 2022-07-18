
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

  // console.log(checkbox);

  // const i = 0;

  if (tacheLength && titleLength > 0) {
    newTache.innerHTML = `
    <tr class="" name="titleValue"id="" name="nouvelleLigne" value="">
    <td class="btnSup"><input type="checkbox" name="${titleValue}" onChange="(functFini)" id="coche" checked ></td>
    <td name="titleValue" class="title">${titleValue}</td>
    <td name="tache" class="descript">&#10132 ${tache.value}</td>
    <td class="btnSup"><button id="btn2" type="reset">supprimer</button></td>
    </tr>

<script>
const checkbox = document.getElementById('coche');

checkbox.addEventListener("click", function () {
  alert('changed');
})
</script>

    `;

    document.querySelector("table").appendChild(newTache);

    
    console.log(titleValue);
    console.log(titleLength);

    // non fonctionnelle
    if (tacheLength || titleLength == 0) {
      console.log('titre -> ' + "non défini");
      console.log('tache -> ' + "non défini");
    }

  } else {
    alert("Pour créer une nouvelle veuillez rentrer un Titre et une Description");
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

// const checkbox = document.getElementById('coche');

// checkbox.addEventListener("click", function () {
//   alert('changed');
// })

// erreur sur l'écouste de l'évènement
// checkbox.addEventListener("Change", functFini());