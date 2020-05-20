import {
    projectInitiator,
    projectCreator
} from './project-creator'
import {
    getId,
    getElements
} from './dom-creator'
import {
    createToDo
} from './todo-creator'

const addProject_button = getId('addProject')
addProject_button.addEventListener('click', projectInitiator)

const userInputValue = getId('form')
userInputValue.addEventListener('submit', projectCreator)

const button = getElements(document, 'addToDo')
//(element, ...attribute) => element.getElementsByClassName(...attribute)
for (let i = 0; i < button.length; i++) {
    button[i].addEventListener("click", createToDo)
}





//userInput2 in project creater/project display, required tag may need to be addressed