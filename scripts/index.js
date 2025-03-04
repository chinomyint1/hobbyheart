import { renderProfiles } from "./render.js";
import { pageProfile } from "./singleProfile.js";
import { likes } from "./likes.js";
import { filter } from "./filter.js";
import { menu } from "./burgermenu.js";

// Tjekker hvilken side vi er på baseret på URL
const path = window.location.pathname;

document.addEventListener("DOMContentLoaded", () => {

  // Burgermenu skal køre på alle sider
  if (path.includes("likes.html")) {

    menu();
  }

  if (path.includes("index.html") || path === "/") {
    renderProfiles();
    filter();
  }

  if (path.includes("single.html")) {
    pageProfile();
  }

  if (path.includes("likes.html")) {
    likes();
  }
});
