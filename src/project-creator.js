const projectInitiator= function() {
    let projectInput= document.querySelector('.projectInput')
    let userInput= document.getElementById('userInput')
    let addProject= document.getElementById('addProject')
    let button= document.querySelector('button')
    if (projectInput.classList.contains("hidden")) {
        projectInput.classList.remove("hidden");
        button.removeAttribute('addProject')
        button.id= "cancelProject"
        userInput.value= ''
      } else {
        userInput.value= ''
        projectInput.classList.add("hidden");
        button.removeAttribute('cancelProject')
        button.id= 'addProject'
      }
};

const projectCreator= function() {
  let leftBlock= document.getElementById('left-block')
  let userInput= document.getElementById('userInput')
  let projectTab=  document.createElement('div')
  let buttonTab= document.querySelector('.button-tab')
      projectTab.className='project-tab'
  let i= document.createElement('i')
      i.id="today"
      i.className="fas fa-calendar-check"
  let p= document.createElement('p')
      p.innerHTML= userInput.value
      projectTab.appendChild(i)
      projectTab.appendChild(p)
      leftBlock.insertBefore(projectTab, buttonTab)
   projectInitiator()
}

export {projectInitiator, projectCreator}