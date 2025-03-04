/* Importerer alle de nødvendige funktioner */
import { renderProfiles } from "./render.js";
import { pageProfile } from "./singleProfile.js";
import { likes } from "./likes.js";
import { filter } from "./filter.js";
import { menu } from "./burgermenu.js";

// Tjekker hvilken side vi er på baseret på URL
const path = window.location.pathname;

/* Sikrer sig at funktionerne kører på de rigtige tidspunkter */
document.addEventListener("DOMContentLoaded", () => {
  if (path.includes("likes.html")) {

    menu();
  } /* Fortæller at menu kun skal køre, hvis vi er på likes.html */

  if (path.includes("index.html") || path === "/") {
    renderProfiles();
    filter();
  } /* Fortæller at renderProfiles og filter skal køre, hvis vi er på index.html */

  if (path.includes("single.html")) {
    pageProfile();
  } /* Fortæller at pageProfile skal køre, hvis vi er på single.html */

  if (path.includes("likes.html")) {
    likes();
  } /* Fortæller at likes skal køre, hvis vi er på likes.html */
});
