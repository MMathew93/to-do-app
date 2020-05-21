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

import Todo from './todo-factory'

const addProject_button = getId('addProject')
addProject_button.addEventListener('click', projectInitiator)

const userInputValue = getId('form')
userInputValue.addEventListener('submit', projectCreator)

const button = getElements(document, 'addToDo')
for (let i = 0; i < button.length; i++) {
    button[i].addEventListener("click", createToDo)
}


/*
1. Update Overview to view next 7 days or a view all projects option

2. view all todos in each project (probably just the title and duedate.. perhaps changing color for different priorities)

3. expand a single todo to see/edit its details

4. delete a todo

title, description, dueDate, notes, checkList, priority
*/