import {
    createElement,
    getId
} from './dom-creator'

const createToDo = function () {
    const toDoList = getId('toDo-List')
    const userInput = getId('userInput2')
    const newToDo = createElement('div', {
        id: `${userInput.value}`,
        class: "todo"
    })
    const p= createElement('p')
    p.innerHTML= userInput.value
    newToDo.appendChild(p)
    toDoList.appendChild(newToDo)
    userInput.value= ''
}

export {
    createToDo
}