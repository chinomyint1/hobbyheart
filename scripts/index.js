/* Import til render */
/* Import til singleprofile */
import { likes } from "./likes.js";
/* Import til filter */




const hamburger = document.querySelector('hamburger'); 

const navLinks = document.querySelector('nav-links'); 

 

hamburger.addEventListener('click', () => { 

    navLinks.classList.toggle('active'); 

}); 