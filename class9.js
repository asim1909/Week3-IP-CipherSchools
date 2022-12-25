// Adding DOM Elements using JS
let content ="This is the Bootcamp";
let header =document.querySelector("header");
let container=document.createElement("section");

container.classList.add("pencil-box");
container.setAttribute("id","pencil");

container.innerHTML =content;
header.append(container);
// header.prepend(container);
// header.appendChild(container);
// header.replaceChild(container);
// header.insertBefore(container);
// header.insertAdjacentElement(container);