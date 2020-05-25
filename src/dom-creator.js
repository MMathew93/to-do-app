const createElement = function (type, attributes) {
    let el = document.createElement(type);
    if (attributes) {
        Object.entries(attributes).forEach(([key, value]) => {
            el.setAttribute(key, value)
        })
    }
    return el
}

const getElement = (element) => document.querySelector(element)

const getId = (id) => document.getElementById(id)

const removeClass = (element, ...attribute) => element.classList.remove(...attribute)

const addClass = (element, ...attribute) => element.classList.add(...attribute)

const getElements = (element, attribute) => element.getElementsByClassName(attribute)

const append = function (parent, children) {
    children.forEach(x => parent.appendChild(x))
}

export {
    createElement,
    getElement,
    getId,
    removeClass,
    addClass,
    getElements,
    append
}