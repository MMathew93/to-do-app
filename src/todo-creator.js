import {
    getElement,
    removeClass,
    getId,
    addClass,
    getElements
} from './dom-creator'

import ToDo from './todo-factory'

let allToDo = []
let todoTags = ["none"]

//toggles the form being shown and hidden for user submission
const showToDoForm = function () {
    const formContainer = getElement('.form-container')
    removeClass(formContainer, 'hidden')
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
    let newToDo = ToDo(titleInput.value, textarea.value, date.value, priority.value);
    allToDo.push(newToDo)
    render()
    clear()
    event.preventDefault();
}

const render = function () {
    const toDoList = getElement('.toDo-List')
    let innerToDo = ''
    let x = allToDo.length - 1
    //for (let i = 0; i < allToDo.length; i++) {
    innerToDo += `
          <div class="toDo" id="${x}">
              <div class="toDo-info">
                  <input type="checkbox" id="accept">
                  <p class="item title">${allToDo[x].title}</p>
                  <p class="item notes">${allToDo[x].notes}</p>
                  <p class= "item date">${allToDo[x].dueDate}</p>
                  <p class= "item priority">${allToDo[x].priority}</p>
                  <i class= 'fas fa-trash-alt trash todo-delete'></i>
                </div>
          </div>
          `;
    //}
    toDoList.innerHTML += innerToDo;
    const toDoDelete = getElements(document, 'todo-delete')
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
    let x = e.target.parentNode.parentNode.getAttribute('id')
    let xx = getId(x)
    xx.remove()
    allToDo.splice(x, 1)
}

export {
    showToDoForm,
    hideToDoForm,
    createToDo,
    todoTags,
    allToDo
}