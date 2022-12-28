const button=document.querySelector("button");
const container=document.querySelectorAll(".container");
button.addEventListener("click",()=>{
    button.classList.add("active");
    console.log("button is clicked");
});
button.addEventListener("click",()=>{
    button.classList.toggle("active");
    console.log("button is clicked");
});
// container.addEventListner("mouseenter",()=>{
//     container.classList.add("purple");
// });
// container.addEventListner("mouseleave",()=>{
//     container.classList.rremove("purple");
// });