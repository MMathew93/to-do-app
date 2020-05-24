import {
    getElement,
    removeClass,
    getId,
    addClass,
    getElements
} from './dom-creator'

import ToDo from './todo-factory'

let allToDo = []

//toggles the form being shown and hidden for user submission
const showToDoForm = function () {
    const formContainer = getElement('.form-container')
    removeClass(formContainer, 'hidden')
    today()
}

const hideToDoForm = function () {
    const formContainer = getElement('.form-container')
    addClass(formContainer, 'hidden')
    clear()
}

//clears user input after submission or clear
function clear() {
    const titleInput = getId('title-input')
    const textarea = getElement('.textarea')
    titleInput.value = ""
    textarea.value = ""
}

//creates and appends user created todo
const createToDo = function () {
    const titleInput = getId('title-input')
    const textarea = getElement('.textarea')
    const date = getId('date')
    const priority = getId('priority-levels')
    let newToDo = ToDo(titleInput.value, date.value, textarea.value, priority.value);
    const rightBlock = getId('right-block')
    const toDoList = getElements(rightBlock, 'toDo-List')
    for (let i = 0; i < toDoList.length; i++) {
        if (toDoList[i].parentNode.classList.contains('active')) {
            allToDo.push(newToDo)
            render()
        }
        clear()
        event.preventDefault();
    }
}

const render = function () {
    const toDoList = document.querySelector('.toDo-List')
    let innerToDo = ''
    for (let i = 0; i < allToDo.length; i++) {
        innerToDo += `
          <div class="toDo" id="${i}">
              <div class="toDo-info">
                  <input type="checkbox" id="accept">
                  <p class="item title">${allToDo[i].title}</p>
                  <p class="item notes">${allToDo[i].notes}</p>
                  <p class= "item date">${allToDo[i].dueDate}</p>
                  <p class= "item priority">${allToDo[i].priority}</p>
                  <button class= "toDo-delete">
                    <i class= 'fas fa-trash-alt'></i>
                  </button>
                </div>
          </div>
          `;
    }
    
    toDoList.innerHTML = innerToDo;
    const toDoDelete = getElements(document, 'toDo-delete')
    for (let i = 0; i < toDoDelete.length; i++) {
    toDoDelete[i].addEventListener("click", removeToDo)
    }
}

/*const importance = function () {
    const itemPriority = document.querySelector('.item priority')
    const toDo = document.querySelector('.toDo')
    console.log(toDo)
    itemPriority.innerHTML === "low" ? toDo.style.backgroundColor = 'dodger blue'
    :itemPriority.innerHTML === "medium" ? toDo.style.backgroundColor = 'yellow' : toDo.style.backgroundColor = 'red'
}*/

function removeToDo(e) {
    let x= e.target.parentNode.parentNode.parentNode.getAttribute('id')
    let xx= getId(x)
    console.log(xx)
    xx.remove()
    allToDo.splice(x, 1)
}

//non-working auto date setter
const today = function () {
    var date = getId('today');
    var today = new Date();
    date.value = today.getFullYear().toString() + '-' + (today.getMonth() + 1).toString().padStart(2, 0) +
        '-' + today.getDate().toString().padStart(2, 0);
}

export {
    showToDoForm,
    hideToDoForm,
    createToDo,
    today
}