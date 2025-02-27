const hamburger = document.getElementById('hamburger'); 

const navLinks = document.getElementById('nav-links'); 

 export function menu() {
    hamburger.addEventListener('click', () => { 

   navLinks.classList.toggle('active'); 
   }); 

} 

