/* Importerer funktioner */
import { renderProfiles } from "./render.js";
import { pageProfile } from "./singleProfile.js";
import { likes } from "./likes.js";
import { filter } from "./filter.js";
import { menu } from "./burgermenu.js";

// Tjekker hvilken side vi er på baseret på URL
const path = window.location.pathname;

document.addEventListener("DOMContentLoaded", () => {

  // Menuen kører kun på likes.html
  if (path.includes("likes.html")) {

    menu();
  }


  if (path.includes("index.html") || path === "/") {
    renderProfiles();
    filter();
  }

  /* PageProfile kører kun på single.html */
  if (path.includes("single.html")) {
    pageProfile();
  }

  /* likes kører kun på likes.html */
  if (path.includes("likes.html")) {
    likes();
  }
});
