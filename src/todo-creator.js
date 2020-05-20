import {
    createElement,
    getId,
    getElements
} from './dom-creator'

const createToDo = function () {
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
}

export {
    createToDo
}