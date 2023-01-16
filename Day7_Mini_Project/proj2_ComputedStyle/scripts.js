const red = document.querySelector(".red");
const violet = document.querySelector(".violet");
const orange = document.querySelector(".orange");
const pink = document.querySelector(".pink");
const cyan = document.querySelector(".cyan");

console.log(window.getComputedStyle(red));
console.log(window.getComputedStyle(red).background);

// CSS Way --> background-color ==> changes to backgroundColor 

console.log(window.getComputedStyle(red).backgroundColor);
console.log(window.getComputedStyle(violet).backgroundColor);

const getColour = ((selectedElement) => {
    return window.getComputedStyle(selectedElement).backgroundColor;
});

console.log(getColour(cyan));