/* Variabler oprettes */
const hamburger = document.querySelector("#hamburger");
const navLinks = document.querySelector(".nav-links");

/* Menu function eksporteres */
export function menu() {
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  }); /* Click event til burgermenuen */
  
  navLinks.addEventListener("click", () => {
    navLinks.classList.remove("active");
  }); /* Sørger for man kan lukke den ved at klikke udenfor dropdown */
}

