const hamburger = document.querySelector('#hamburger'); 

const navLinks = document.querySelector('.nav-links'); 


 export function menu() {
    hamburger.addEventListener('click', () => { 

   navLinks.classList.toggle('active'); 
   }); 

window.addEventListener('click', (e) => {
      
   if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) { 
       navLinks.classList.remove('active');
       
 }
    });
} 

