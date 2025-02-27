/* Import til render */
/* Import til singleprofile */
import { likes } from "./likes.js";
/* Import til filter */




const hamburger = document.getElementById('hamburger'); 

const navLinks = document.getElementById('nav-links'); 

 

hamburger.addEventListener('click', () => { 

    navLinks.classList.toggle('active'); 

}); 