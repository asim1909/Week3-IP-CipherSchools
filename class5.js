let type=document.querySelector('header');
console.log(type);

let classSelector=document.querySelector('.header-content');
console.log(classSelector);

let idSelector=document.querySelector('#header');
console.log(idSelector);

let decendent=document.querySelector('.header-content p');
console.log(decendent);

let All=document.querySelectorAll("main p");
console.log(All);

let bg =document.querySelectorAll("main p").forEach((item)=>(item.style.background="blue"));

let color =document.querySelectorAll("main p:last-child").forEach((item)=>(item.style.color="white"));

// Older Method
let oldtype =document.getElementsByTagName("header");
console.log(oldtype);

let oldclass =document.getElementsByClassName("header-content");
console.log(oldclass);

let oldid =document.getElementById("header");
console.log(oldid);