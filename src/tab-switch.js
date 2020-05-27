import {
    allToDo
} from './todo-creator'

//Library for easier time and date converting
const moment = require("moment")

//hides or shows the todos that are affiliated with the current date
const todaySwitch = function () {
    var date = moment().format('MM/DD/YYYY')
    var todos = document.getElementsByClassName('toDo')
    for (let i = 0; i < allToDo.length; i++) {
        if (moment(allToDo[i].dueDate).format('MM/DD/YYYY') == date) {
            todos[i].style.display = "block"
        } else {
            todos[i].style.display = "none"
        }
    }
}

//hides or shows the todos that are due in the next 7 days
const nextWeek = function () {
    var todos = document.getElementsByClassName('toDo')
    for (let i = 0; i < allToDo.length; i++) {
        for (let j = 0; j <= 7; j++) {
            let day = moment().add(j, 'days').format('MM/DD/YYYY')
            if (moment(allToDo[i].dueDate).format('MM/DD/YYYY') == day) {
                todos[i].style.display = "block"
                break;
            } else {
                todos[i].style.display = "none"
            }
        }
    }
}

//hides or shows the todos that have been marked "High" priority
const importantSwitch = function () {
    var todos = document.getElementsByClassName('toDo')
    for (let i = 0; i < allToDo.length; i++) {
        if (allToDo[i].priority === 'High') {
            todos[i].style.display = "block"
        } else {
            todos[i].style.display = "none"
        }
    }
}

//hides or shows the todos associated with the user created tag ***********NOT WORKING*************
const tagSwitch = function (e) {
    var todos = document.getElementsByClassName('toDo')
    for (let i = 0; i < allToDo.length; i++) {
        if (allToDo[i].tag === e.target.parentNode.classList[0]) {
            todos[i].style.display = "block"
        } else {
            todos[i].style.display = "none"
        }
    }
}

export {
    todaySwitch,
    nextWeek,
    importantSwitch,
    tagSwitch
}