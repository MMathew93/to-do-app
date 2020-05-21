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
  createToDo,
  today
} from './todo-creator'

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
    class: `${userInput.value} project-tab select`
  })
  const projectTag = createElement('div', {
    class: 'projectTag'
  })
  const i = createElement('i', {
    id: 'today',
    class: 'fas fa-calendar-check'
  })
  const trash = createElement('i', {
    id: `${userInput.value}`,
    class: 'fas fa-trash-alt'
  })
  trash.addEventListener('click', projectRemove)
  const p = createElement('p')
  p.innerHTML = userInput.value
  let x = [i, p]
  append(projectTag, x)
  let y = [projectTag, trash]
  append(projectTab, y)
  leftBlock.insertBefore(projectTab, buttonTab)
  //#############################################################################*/
  //userInput2 in project creater/project display, required tag may need to be addressed
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
  addToDo.appendChild(add)
  const toDoInput = createElement('div', {
    class: "toDoInput"
  })
  const userInput2 = createElement('input', {
    class: "userInput2",
    type: "text",
    placeholder: "Add Task",
    required: true
  })
  toDoInput.appendChild(userInput2)
  let z = [addToDo, toDoInput]
  append(toDoButton, z)
  let a = [projectTitle, toDoList, toDoButton]
  append(projectDisplay, a)
  let b = [projectDisplay]
  append(rightBlock, b)

  projectInitiator()
  projectHighlight()

  const button = getElements(document, 'addToDo')
  for (let i = 0; i < button.length; i++) {
    button[i].addEventListener("click", function () {
      toDoForm()
      today()
    });
  }
}


const projectHighlight = function () {
  const leftBlock = getId('left-block')
  const rightBlock = getId('right-block')
  const getAllLeft = getElements(leftBlock, 'select')
  const getAllRight = getElements(rightBlock, 'select')
  for (let i = 0; i < getAllLeft.length; i++) {
    getAllLeft[i].addEventListener('click', function () {
      Array.prototype.forEach.call(getAllLeft, function (node) {
        node.classList.remove('active')
      });
      this.classList.add('active')
      Array.prototype.forEach.call(getAllRight, function (node) {
        node.classList.replace('active', 'hidden')
      });
      getAllRight[i].classList.replace('hidden', 'active')
    })
  }
}

projectHighlight()

const projectRemove = function (e) {
  let x = e.target.parentNode.classList[0]
  const elements = getElements(document, x);
  while (elements.length > 0) elements[0].remove();
}

export {
  projectInitiator,
  projectCreator
}