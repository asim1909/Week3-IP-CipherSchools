// Modifying the elements & attrubutes in JS
let attribute =document.querySelector("img").attributes;
console.log(attribute);

let hasattribute = document.querySelector("img").hasAttribute("border");
console.log(hasattribute);

let getattribute= document.querySelector("img").getAttribute("src");
console.log("getattribute");

let setattribute =document.querySelector("img").setAttribute("src" , "image_river.jpeg");
// console.log(setattribute);

let removeattribute =document.querySelector("img").removeAttribute("src" , "image_river.jpeg");
// console.log(removeattribute);