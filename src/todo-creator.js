import {
    getElement,
    removeClass,
    getId,
    addClass,
    getElements
} from './dom-creator'

import ToDo from './todo-factory'


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

function clear() {
    const titleInput = getId('title-input')
    const textarea = getElement('.textarea')
    titleInput.value = ""
    textarea.value = ""
}

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
    console.log(toDoList[0].parentNode)
    for (let i = 0; i < toDoList.length; i++) {
        if (toDoList[i].parentNode.classList.contains('active')) {
            console.log(newToDo)
            /*const newToDo = createElement('div', {
                id: `${userInput[i].value}`,
                class: "todo"
            })
            const p = createElement('p')
            p.innerHTML = userInput[i].value
            newToDo.appendChild(p)
            toDoList[i].appendChild(newToDo)
            userInput[i].value = ''
        }*/
        }
        clear();
        event.preventDefault();
    }
}

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

/*const createToDo = function () {
    //const toDoList = document.getElementByClassName('toDo-List')
    const rightBlock = getId('right-block')
    const userInput = getElements(rightBlock, 'userInput2')
    const toDoList = getElements(rightBlock, 'toDo-List')
    for (let i = 0; i < userInput.length; i++) {
        if (userInput[i].parentNode.parentNode.parentNode.classList.contains('active')) {
            const newToDo = createElement('div', {
                id: `${userInput[i].value}`,
                class: "todo"
            })
            const p = createElement('p')
            p.innerHTML = userInput[i].value
            newToDo.appendChild(p)
            toDoList[i].appendChild(newToDo)
            userInput[i].value = ''
        }
    }
}*/