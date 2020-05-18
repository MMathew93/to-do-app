import {
  createElement,
  getElement,
  getId,
  removeClass,
  addClass,
  getElements,
  append
} from './dom-creator'

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
    id: userInput.value,
    class: 'project-tab select'
  })
  const projectTag = createElement('div', {
    class: 'projectTag'
  })
  const i = createElement('i', {
    id: 'today',
    class: 'fas fa-calendar-check'
  })
  const trash = createElement('i', {
    id: 'trash',
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
    id: userInput.value,
    class: "display select active"
  })
  const projectTitle = createElement('h1', {
    class: "project-title"
  })
  projectTitle.innerHTML = userInput.value
  const toDoList = createElement('div', {
    id: "toDo-List"
  })
  const toDoButton = createElement('div', {
    class: "toDo-button"
  })
  const addToDo = createElement('button', {
    id: "addToDo"
  })
  const add = createElement('i', {
    class: "fas fa-plus"
  })
  addToDo.appendChild(add)
  const toDoInput = createElement('div', {
    class: "toDoInput"
  })
  const userInput2 = createElement('input', {
    id: "userInput2",
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
}

const projectHighlight = function () {
  const leftBlock = getId('left-block')
  const highLight = leftBlock.getElementsByClassName('select')
  for (var i = 0; i < highLight.length; i++) {
    highLight[i].addEventListener("click", function () {
      let current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  }
}

projectHighlight()

const projectRemove = function (e) {
  console.log(e.target.parentNode.id)
  const rightBlock = getId('right-block')
  let x= e.target.parentNode.id
  e.target.parentNode.remove();
  //rightBlock.removeChild(x)
}

export {
  projectInitiator,
  projectCreator
}