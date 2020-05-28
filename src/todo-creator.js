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
var toDoPosition

//toggles the form being shown and hidden for user submission
const showToDoForm = function () {
    const formContainer = getElement('.form-container')
    removeClass(formContainer, 'hidden')
}

const hideToDoForm = function () {
    const formContainer = getElement('.form-container')
    addClass(formContainer, 'hidden')
    const submitButton = getElement('.submit')
    removeClass(submitButton, 'hidden')
    const hiddenEdit = getElement('.edit')
    addClass(hiddenEdit, 'hidden')
    clear()
}

//clears user input after submission or clear
function clear() {
    const titleInput = getId('title-input')
    const textarea = getElement('.textarea')
    const dueDate = getId('date')
    titleInput.value = ""
    textarea.value = ""
    dueDate.value = ""
}

//creates and appends user created todo
const createToDo = function () {
    const titleInput = getId('title-input')
    const textarea = getElement('.textarea')
    const date = getId('date')
    const priority = getId('priority-levels')
    const tag = getId('tag-names')
    let newToDo = ToDo(titleInput.value, textarea.value, date.value, priority.value, tag.value);
    allToDo.push(newToDo)
    render()
    clear()
    event.preventDefault();
}

const render = function () {
    const toDoList = getElement('.toDo-List')
    let innerToDo = ''
    let x = allToDo.length - 1
    innerToDo += `
          <div class="toDo" id="${allToDo[x].title}">
              <div class="toDo-info">
                  <input type="checkbox" id="accept">
                  <p class="item title">${allToDo[x].title}</p>
                  <p class="item notes">${allToDo[x].notes}</p>
                  <p class= "item date">${allToDo[x].dueDate}</p>
                  <p class= "item priority">${allToDo[x].priority}</p>
                  <p class= "item tag hidden">${allToDo[x].tag}</p>
                  <button class="editThis">Edit</button>
                  <i class= 'fas fa-trash-alt trash todo-delete'></i>
                </div>
          </div>
          `;
    toDoList.innerHTML += innerToDo;
    const toDoDelete = getElements(document, 'todo-delete')
    for (let i = 0; i < toDoDelete.length; i++) {
        toDoDelete[i].addEventListener("click", removeToDo)
    }
    const editThis = getElements(document, 'editThis')
    for (let i = 0; i < editThis.length; i++) {
        editThis[i].addEventListener("click", openEdit)
    }
}

/*const importance = function () {
    const itemPriority = document.querySelector('.item priority')
    const toDo = document.querySelector('.toDo')
    console.log(toDo)
    itemPriority.innerHTML === "low" ? toDo.style.backgroundColor = 'dodger blue'
    :itemPriority.innerHTML === "medium" ? toDo.style.backgroundColor = 'yellow' : toDo.style.backgroundColor = 'red'
}*/

//removes todo
function removeToDo(e) {
    let x = e.target.parentNode.parentNode.getAttribute('id')
    let xx = getId(x)
    xx.remove()
    allToDo.splice(x, 1)
}

//when user hits edit on actual object
const openEdit = function () {
    showToDoForm()
    const hiddenEdit = getElement('.edit')
    removeClass(hiddenEdit, 'hidden')
    const submitButton = getElement('.submit')
    addClass(submitButton, 'hidden')
    const titleInput = getId('title-input')
    const textarea = getElement('.textarea')
    const date = getId('date')
    const priority = getId('priority-levels')
    const tag = getId('tag-names')
    toDoPosition = allToDo.findIndex(x => x.title)
    titleInput.value = this.parentNode.children[1].textContent
    textarea.value = this.parentNode.children[2].textContent
    date.value = this.parentNode.children[3].textContent
    priority.value = this.parentNode.children[4].textContent
    tag.value = this.parentNode.children[5].textContent
}


//actual edit to the object todo
function editToDo() {
    const titleInput = getId('title-input').value
    const textarea = getElement('.textarea').value
    const date = getId('date').value
    const priority = getId('priority-levels').value
    const tag = getId('tag-names').value
    const todo = createToDo(titleInput, textarea, date, priority, tag);
    let x = allToDo[toDoPosition].title
    let xx = getId(x)
    xx.remove()
    allToDo.splice(toDoPosition, 1)
    hideToDoForm()
}


export {
    showToDoForm,
    hideToDoForm,
    createToDo,
    editToDo,
    todoTags,
    allToDo
}