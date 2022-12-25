let oldid =document.getElementById("header");
console.log(oldid);

//Modifying the classes in JS
let className =document.querySelector("header").className;
console.log(className);

let classList =document.querySelector("header").classList;
console.log(classList);

let methodone= document.querySelector("main p").classList.add("newclass");

// let methodtwo=document.querySelector("main p").classList.remove("newclass");

let methodthree=document.querySelector("main p").classList.replace("newclass","oldclass");