/* Opretter variabler */
const hamburger = document.querySelector('#hamburger'); 
const navLinks = document.querySelector('.nav-links'); 

/* Funktion til menu */
 export function menu() {
    hamburger.addEventListener('click', () => { /* Click event */

   navLinks.classList.toggle('active'); /* Viser dropdown menu */
   }); 

window.addEventListener('click', (e) => { /* Tilføjer click event på hele vinduet */
      
   if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) { /* Tjekker om det der bliver klikket på er inden for navLinks eller er hamburger*/
       navLinks.classList.remove('active'); /* Hvis ikke klikket finder sted på navLinks eller hamburger, fjernes active og menuen lukkes */
       
 }
    });
} 

