import {
    projectInitiator,
    projectCreator
} from './project-creator'
import {
    getId
} from './dom-creator'
import {
    createToDo
} from './todo-creator'

const addProject_button = getId('addProject')
addProject_button.addEventListener('click', projectInitiator)

const userInputValue = getId('form')
userInputValue.addEventListener('submit', projectCreator)

const button= document.getElementsByClassName('addToDo')
//(element, ...attribute) => element.getElementsByClassName(...attribute)
for(var i=0; i<button.length; i++){
    button[i].addEventListener("click", createToDo)
}




//userInput2 in project creater/project display, required tag may need to be addressed