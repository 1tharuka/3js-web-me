'use strict';
/**
 * add event on multiple elemets
 */

const addEventOnElement = function (elemets, eventType, callback)
{
    for(let i = 0, len = elemets.length; i < len; i++ ){
    elemets[i].addEventListener(eventType, callback);  
    }
}
/**
 * Navbar toggle for mobile
 */
const navbar = document.querySelector("[data-navbar]");
const navToggleBtn = document.querySelector("[  data-nav-toggle-btn]");
const overlay = document.querySelector("[data-overlay]");


const toggleNavbar = function () {
    navbar.classList.toggle("active")
    navToggleBtn.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("nav-active");
    
}
addEventOnElement([navToggleBtn, overlay], "click", toggleNavbar)

/**
 * parellax effect
 */
const parellaxElements = document.querySelectorAll("[data-parallax]");
window.addEventListener("mousemove", event => {
  for (let i = 0, len = parellaxElements.length; i < len; i++ ){
const movex = (event.clientX / window.innerWidth) * Number (parellaxElements[i].dataset.parallaxSpeed);
const movey = (event.clientY / window.innerHeight) * Number (parellaxElements[i].dataset.parallaxSpeed);
parellaxElements[i].animate({
 transform: `translate(${movex}px, ${movey}px)`   
}, {duration:500,fill:"forwards"}) ;
} 
})