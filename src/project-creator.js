import {createElement, getElement, getId, removeClass, addClass, append} from './dom-creator'

const projectInitiator= function() {
    let projectInput= getElement('.projectInput')
    let userInput= getId('userInput')
    let button= getElement('button')
    if (projectInput.classList.contains('hidden')) {
        removeClass(projectInput, 'hidden');
        removeClass(button, 'addProject')
        button.id= 'cancelProject'
        userInput.value= ''
      } else {
        userInput.value= ''
        addClass(projectInput, 'hidden');
        removeClass(button, 'cancelProject')
        button.id= 'addProject'
      }
};

const projectCreator= function() {
  const leftBlock= getId('left-block')
  const userInput= getId('userInput')
  const buttonTab= document.querySelector('.button-tab')
  const projectTab= createElement('div', {id: userInput.value, class: 'project-tab'})
  const projectTag= createElement('div', {class: 'projectTag'})
  const i= createElement('i', {id: 'today', class:'fas fa-calendar-check'})
  const trash= createElement('i', {id: 'trash', class:'fas fa-trash-alt'})
  const p= createElement('p')
      p.innerHTML= userInput.value
  let x=[i,p]
  append(projectTag, x)
  let y=[projectTag, trash]
  append(projectTab, y)
      leftBlock.insertBefore(projectTab, buttonTab)
   projectInitiator()
}

const projectRemove= function() {
  let el= document.getElementById(this)
  el.parentNode.removeChild( el );
}

export {projectInitiator, projectCreator, projectRemove}