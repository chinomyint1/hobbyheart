/* Importerer likesTemplate og filter */
import { likesTemplate } from "./templates.js";
import { filter } from "./filter.js";

/* Fortæller den kun skal køre funktionerne, når DOM er loaded */
document.addEventListener("DOMContentLoaded", () => {
  const path = window.location.pathname;

  /* Hvis vi er på likes.html skal filter køres */
  if (path.includes("likes.html")) {
    filter();
  }
});


/* En funktion til likes */
export const likes = () => {
    const likesContainer = document.querySelector(".likes-container");

    if (!likesContainer) {
        return; /* Hvis ikke likes-container eksisterer, skal den gå tilbage */
    }

    /* gemmer likes i localstorage */
    let likedProfiles = JSON.parse(localStorage.getItem("likes")) || [];

    /* hvis ikke der er nogle liked profiler, udskriver den en besked */
    if (likedProfiles.length === 0) {
        likesContainer.innerHTML = `<p>You have no liked profiles</p>`;
        return;
    }

    renderAllLikedProfiles(likedProfiles);
    /* Kalder funktionen der udskriver likes */
};

// Funktion til at vise alle likede profiler
const renderAllLikedProfiles = (profiles) => {
    const likesContainer = document.querySelector(".likes-container");
    likesContainer.innerHTML = ""; // Ryd containeren

    /* Viser alle de liked profiler */
    profiles.forEach(profile => {
        likesContainer.insertAdjacentHTML("beforeend", likesTemplate(profile));
    });

    addEventListeners();
};

