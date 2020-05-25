import {
    allToDo
} from './todo-creator'

const moment = require("moment")

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