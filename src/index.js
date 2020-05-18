import { projectInitiator, projectCreator, projectDisplayer} from './project-creator'
import {getId} from './dom-creator'

const addProject_button= getId('addProject')
addProject_button.addEventListener('click', projectInitiator)

const userInputValue= getId('form')
userInputValue.addEventListener('submit', projectCreator)

//const addToDo_button= getId('addToDo')
//addToDo_button.addEventListener('click', )



//userInput2 in project creater/project display, required tag may need to be addressed