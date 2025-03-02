import { renderProfiles } from "./render.js";
import { pageProfile } from "./singleProfile.js";
import { likes } from "./likes.js";
import { filter } from "./filter.js";
import { menu } from "./burgermenu.js";

// Tjekker hvilken side vi er på baseret på URL
const path = window.location.pathname;

document.addEventListener("DOMContentLoaded", () => {
  console.log("✅ DOM er indlæst, kører scripts...");

  // Burgermenu skal køre på alle sider
  menu();

  if (path.includes("index.html") || path === "/") {
    console.log("Forside - kører renderProfiles() & filter()");
    renderProfiles();
    filter(); // Kører kun filter EFTER DOM er klar
  }

  if (path.includes("single.html")) {
    console.log("Single profil - kører pageProfile()");
    pageProfile();
  }

  if (path.includes("likes.html")) {
    console.log("Likes side - kører likes()");
    likes();
  }
});
