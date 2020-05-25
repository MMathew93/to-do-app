import {
  createElement,
  getElement,
  getId,
  removeClass,
  addClass,
  getElements,
  append
} from './dom-creator'

import {
  showToDoForm,
  todoTags
} from './todo-creator'

import {
  todaySwitch,
  nextWeek,
  importantSwitch,
  tagSwitch
} from './tab-switch'

const projectInitiator = function () {
  const projectInput = getElement('.projectInput')
  const userInput = getId('userInput')
  const button = getElement('button')
  if (projectInput.classList.contains('hidden')) {
    removeClass(projectInput, 'hidden');
    removeClass(button, 'addProject')
    button.id = 'cancelProject'
    userInput.value = ''
  } else {
    userInput.value = ''
    addClass(projectInput, 'hidden');
    removeClass(button, 'cancelProject')
    button.id = 'addProject'
  }
};

const projectCreator = function () {
  const leftBlock = getId('left-block')
  const userInput = getId('userInput')
  const buttonTab = document.querySelector('.button-tab')
  const projectTab = createElement('div', {
    class: `${userInput.value} project`
  })
  const projectTag = createElement('div', {
    class: 'projectTag'
  })
  const i = createElement('i', {
    id: 'today',
    class: 'fas fa-calendar-check'
  })
  const trash = createElement('i', {
    class: 'fas fa-trash-alt trash'
  })
  trash.addEventListener('click', projectRemove)
  const p = createElement('p')
  p.innerHTML = userInput.value
  let x = [i, p]
  append(projectTag, x)
  let y = [projectTag, trash]
  append(projectTab, y)
  leftBlock.insertBefore(projectTab, buttonTab)
  /*/#############################################################################
  const rightBlock = getId('right-block')
  const projectDisplay = createElement('div', {
    class: `${userInput.value} display select hidden`
  })
  const projectTitle = createElement('h1', {
    class: "project-title"
  })
  projectTitle.innerHTML = userInput.value
  const toDoList = createElement('div', {
    class: "toDo-List"
  })
  const toDoButton = createElement('div', {
    class: "toDo-button"
  })
  const addToDo = createElement('button', {
    class: "addToDo"
  })
  const add = createElement('i', {
    class: "fas fa-plus"
  })
  const z= createElement('p') 
  z.innerHTML= "Add New Task"
  let zz=[addToDo, z]
  addToDo.appendChild(add)
  append(toDoButton, zz)
  let a = [projectTitle, toDoList, toDoButton]
  append(projectDisplay, a)
  let b = [projectDisplay]
  append(rightBlock, b)
  */
  let option = createElement('option', {
    value: `${userInput.value}`
  })
  option.innerHTML = `${userInput.value}`
  const tagNames = getId('tag-names')
  tagNames.appendChild(option)
  todoTags.push(`${userInput.value}`)
  projectInitiator()
  projectHighlight()

  const button = getElements(document, 'addToDo')
  for (let i = 0; i < button.length; i++) {
    button[i].addEventListener("click", function () {
      showToDoForm()
    });
  }
}


const projectHighlight = function () {
  const leftBlock = getId('left-block')
  const getAllLeft = getElements(leftBlock, 'project')
  const projectTitle = document.querySelector('.project-title')
  for (let i = 0; i < getAllLeft.length; i++) {
    getAllLeft[i].addEventListener('click', function () {
      Array.prototype.forEach.call(getAllLeft, function (node) {
        node.classList.remove('active')
      });
      this.classList.add('active')
      projectTitle.innerHTML = this.classList[0]
    })
  }
}

projectHighlight()

const todayTab = document.querySelector('.Today')
todayTab.addEventListener('click', todaySwitch)

const overviewTab = document.querySelector('.Week')
overviewTab.addEventListener('click', nextWeek)

const importantTab = document.querySelector('.Important')
importantTab.addEventListener('click', importantSwitch)

const newTabs = getElements(document, 'project')
for (let i = 0; i < newTabs.length; i++) {
  newTabs[i].addEventListener('click', tagSwitch)
}

const projectRemove = function (e) {
  let x = e.target.parentNode.classList[0]
  const elements = getElements(document, x);
  while (elements.length > 0) elements[0].remove();
}

export {
  projectInitiator,
  projectCreator
}