// impossible de recuperer le select a cocher


const formBtn = document.getElementById('btn1');

// formBtn.addEventListener("click", newList);

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

      <td class="btnSup">
        <button id="btn2" id="finish" type="button">x</button>
      </td>
    </tr>
    `;

    document.querySelector("table").appendChild(newTache);

  }else {
    console.log('titre -> non défini');
    console.log('tache -> non défini');
    alert("Pour créer une nouvelle veuillez rentrer un Titre et une Description");
  }

}



function functFini(){
  const check = document.getElementById('coche');

  if(check.checked === true){
    console.log('checked');
    document.querySelector('td').classList.add("fini");
    document.querySelector("tr.title[id=tache]");
  }else if(check.checked ===false){
    console.log("noChecked");
    document.querySelector('td').classList.remove("fini");


  }
}



function addDeleteTodoOption() {
  const todoListDeleteBtns = document.querySelectorAll('button.finish');
  console.log("TABLEU", typeof todoListDeleteBtns)
  console.log(todoListDeleteBtns);
  for (let i = 0; i < todoListDeleteBtns.length; i++) {
    todoListDeleteBtns[i].addEventListener('click', function() {
        this.parentNode.parentNode.classList.add('.fini');
        //TODO: Chercher la description du parent pour ajouter la classe fini
        const parentDesc = document.getElementsByName('tache')
        console.log("parentDesc", parentDesc)
        parentDesc.forEach(node => node.classList.add('fini'))
        setTimeout(() => {
          this.parentNode.parentNode.remove();
        }, 2000);
    });
  }
};


function createTask(titleValue, tacheValue){
  const newTache = document.createElement('tr');
  newTache.innerHTML = `
    <tr class="" name="titleValue" id="NewTacheLine " name="nouvelleLigne" value="">
      <td class="btnSup">

      <labal for="coche">
        <input type="checkbox" name="${titleValue}" onChange="functFini()" id="coche"></td>
      </label>

      <td name="tache" class="title">${titleValue}</td>
      <td name="tache" class="descript">${tacheValue}</td>

      <td class="btnSup">
        <button id="btn2" class="finish" type="button">x</button>
      </td>
    </tr>
    `;

    document.querySelector("table").appendChild(newTache);
}

formBtn.addEventListener("click", (event) => {
  event.preventDefault();

  const title = document.getElementById('title');
  const titleValue = title.value;
  const tache = document.getElementById('tache');
  const tacheValue = tache.value;

  createTask(titleValue, tacheValue);
  addDeleteTodoOption();
  // addDoneTodoOption();
});