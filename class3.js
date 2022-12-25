/**
 * Multiple line comments 
 */
const navSlide =() =>{
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelector(".nav-links li");
burger.addEventListener("click",() =>{
    //Toggle nav
    nav.classList.toggle("nav-active");  //this is the nav
    //Animate Links
    navLinks.forEach(link,index) =>{
        if (link.style.animation){
            link.style.animation="";
        }else{
            link.style.animation='navLinkfade 0.5s ease forwars'
            index /7+0.5
        }s';
    }
});
//Burger Animation
}