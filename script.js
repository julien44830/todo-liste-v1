// impossible de recuperer le select a cocher

const formBtn = document.getElementById('btn1');

// formBtn.addEventListener("click", newList);
const title = document.getElementById('title');
const tache = document.getElementById('tache');


const titleValue = title.value;
const tacheValue = tache.value;
const tacheLength = tacheValue.length;
const titleLength = titleValue.length;


function createTask(titleValue, tacheValue){
  const newTache = document.createElement('tr');
  newTache.innerHTML = `
  <tr class="" name="titleValue" id="NewTacheLine " name="nouvelleLigne" value="">
  <td class="btnSup">
  
  <labal for="coche">
  <input type="checkbox" id="coche" class="finish"></td>
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



function functFini(){
  const check = document.querySelectorAll('checkbox.finish');
  console.log("TABLEU", typeof check);
  console.log(check);

  for (let i = 0; i < check.length; i++) {
    check[i].addEventListener('click', function() {
      this.parentNode.classList.add('fini');
      //TODO: Chercher la description du parent pour ajouter la classe fini
      const parentDesc = document.getElementsByName('tache');
      console.log("parentDesc", parentDesc);
      console.log(check);

    });
  }

  if(check.checked === true){
    console.log('checked');
    
  }else if(check.checked ===false){
    console.log("noChecked");

  }
}


  function addDeleteTodoOption() {
    const todoListDeleteBtns = document.querySelectorAll('button.finish');
    console.log("TABLEU", typeof todoListDeleteBtns);
    console.log(todoListDeleteBtns);

    for (let i = 0; i < todoListDeleteBtns.length; i++) {
      todoListDeleteBtns[i].addEventListener('click', function() {
          this.parentNode.parentNode.classList.add('finiRemove');//remplacer .fini par une animation
          //TODO: Chercher la description du parent pour ajouter la classe fini
          const parentDesc = document.getElementsByName('tache');
          console.log("parentDesc", parentDesc);
          parentDesc.forEach(node => node.classList.add('finiRemouve'))
          setTimeout(() => {
            this.parentNode.parentNode.remove();
          }, 1000);
      });
    }
  };


  formBtn.addEventListener("click", (event) => {
    event.preventDefault();

    const title = document.getElementById('title');
    const titleValue = title.value;
    const tache = document.getElementById('tache');
    const tacheValue = tache.value;

    createTask(titleValue, tacheValue);
    addDeleteTodoOption();
    functFini(titleValue, tacheValue);
  });


  if (tacheLength && titleLength > 0){
  }else {
  console.log('titre -> non défini');
  console.log('tache -> non défini');
  // alert("Pour créer une nouvelle veuillez rentrer un Titre et une Description");
}
