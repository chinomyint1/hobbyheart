const hamburger = document.querySelector('#hamburger'); 

const navLinks = document.querySelector('.nav-links'); 

 export function menu() {
    hamburger.addEventListener('click', () => { 

   navLinks.classList.toggle('active'); 
   }); 

} 

