import {
    projectInitiator,
    projectCreator
} from './project-creator'
import {
    getId,
    getElements,
    getElement
} from './dom-creator'
import {
    showToDoForm,
    hideToDoForm,
    createToDo,
    editToDo
} from './todo-creator'

//import Todo from './todo-factory'

const addProject_button = getId('addProject')
addProject_button.addEventListener('click', projectInitiator)

const userInputValue = getId('project-form')
userInputValue.addEventListener('submit', projectCreator)

const button = getElements(document, 'addToDo')
for (let i = 0; i < button.length; i++) {
    button[i].addEventListener("click", function () {
        showToDoForm()
    });
}

const cancel = getElement('.cancel')
cancel.addEventListener('click', hideToDoForm)

const submit = getElement('.submit')
submit.addEventListener('click', function () {
    createToDo()
    hideToDoForm()
});

const edit = getElement('.edit')
edit.addEventListener('click', editToDo)



/*
1. Update Overview to view next 7 days or a view all projects option

2. view all todos in each project (probably just the title and duedate.. perhaps changing color for different priorities)

3. expand a single todo to see/edit its details

4. delete a todo

title, description, dueDate, notes, checkList, priority
*/