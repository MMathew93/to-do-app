import {
    getElement,
    removeClass,
    getId,
    addClass,
    getElements
} from './dom-creator'

import ToDo from './todo-factory'

let allToDo= []

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
    const yes = getId('yes')
    const no = getId('no')
    let newToDo = ToDo(titleInput.value, textarea.value, date.value, priority.value, yes.value, no.value);
    const rightBlock = getId('right-block')
    const toDoList = getElements(rightBlock, 'toDo-List')
    
    for (let i = 0; i < toDoList.length; i++) {
        if (toDoList[i].parentNode.classList.contains('active')) {
            allToDo.push(newToDo)
        }
        render()
        clear();
        event.preventDefault();
    }
}

const render= function () {
    let todoList= document.querySelector('.toDo-List')
    todoList = JSON.parse(localStorage.getItem('todoList'))
    let innerToDo= ''
    for (let i = 0; i < todoList.length; i++) {
        innerToDo += `
          <div class="toDo" id="${i}">
              <div class="toDo-name">
                  <h2>${todoList[i].titleInput}</h2>
              </div>
              <div class="toDo-info">
                  <h3>${todoList[i].date}</h3>
                  <h4>${todoList[i].priority} pages</h4>
                  <h3>${todoList[i].textarea}</h3>
          </div>
          
          `;
          
      }
      todoList.innerHTML = innerToDo;
      console.log(allToDo)
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
