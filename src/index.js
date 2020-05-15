import { projectInitiator, projectCreator } from './project-creator'

const addProject_button= document.getElementById('addProject')
addProject_button.addEventListener('click', projectInitiator)

const userInputValue= document.getElementById('form')
userInputValue.addEventListener('submit', projectCreator)