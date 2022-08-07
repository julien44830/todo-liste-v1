// impossible de recuperer le select a cocher


const formBtn = document.getElementById('btn1');
const checkbox = document.getElementById('checkbox1');

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



function addClassFiniOption(){
  const todoListAddClass = document.querySelectorAll('check.coche');
  console.log("TABLEU", typeof todoListAddClass)
  console.log(todoListAddClass);
  for (let i = 0; i < todoListAddClass.length; i++) {
    todoListAddClass[i].addEventListener('change', function() {
        this.parentNode.parentNode.classList.add('.fini');
        const parentDesc = document.getElementsByName('tache')
        parentDesc.forEach(node => node.classList.add('fini'))
        setTimeout(() => {
          this.parentNode.parentNode.classList.add('.fini');
        }, 10);
    });
  }
}

function addDeleteTodoOption() {
  const todoListDeleteBtns = document.querySelectorAll('button.finish');
  console.log("TABLEU", typeof todoListDeleteBtns)
  console.log(todoListDeleteBtns);
  for (let i = 0; i < todoListDeleteBtns.length; i++) {
    todoListDeleteBtns[i].addEventListener('click', function() {
        // this.parentNode.parentNode.classList.add('.fini');
        //TODO: Chercher la description du parent pour ajouter la classe fini
        const parentDesc = document.getElementsByName('tache')
        console.log("parentDesc", parentDesc)
        // parentDesc.forEach(node => node.classList.add('fini'))
        setTimeout(() => {
          this.parentNode.parentNode.remove();
        }, 500);
    });
  }
};


function createTask(titleValue, tacheValue){
  const newTache = document.createElement('tr');
  newTache.innerHTML = `
    <tr class="" name="titleValue" id="NewTacheLine " name="nouvelleLigne" value="">
      <td class="btnSup">

      <labal for="coche">
        <input type="checkbox" name="check" id="checkbox1" class="coche"></td>
      </label>

      <td name="tache" class="title">${titleValue}</td>
      <td name="tache" class="descript">${tacheValue}</td>

      <td class="btnSup">
        <button id="btn2" class="finish" type="button">x</button>
      </td>
    </tr>
    `;

    document.querySelector("table").appendChild(newTache);
    console.log(checkbox);
}

formBtn.addEventListener("click", (event) => {
  event.preventDefault();

  const title = document.getElementById('title');
  const titleValue = title.value;
  const tache = document.getElementById('tache');
  const tacheValue = tache.value;

  createTask(titleValue, tacheValue);
  addDeleteTodoOption();
  addClassFiniOption();

  // addDoneTodoOption();
});

checkbox.addEventListener("change", (event) => {
  event.preventDefault();

  addClassFiniOption();

  // addDoneTodoOption();
});