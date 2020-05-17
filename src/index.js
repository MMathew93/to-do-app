import { projectInitiator, projectCreator} from './project-creator'
import {getId} from './dom-creator'

const addProject_button= getId('addProject')
addProject_button.addEventListener('click', projectInitiator)

const userInputValue= getId('form')
userInputValue.addEventListener('submit', projectCreator)

//const addToDo_button= getId('addToDo')
//addToDo_button.addEventListener('click', )