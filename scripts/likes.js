/* Importer templates og filter */
import { likesTemplate } from "./templates.js";
import { filter } from "./filter.js";

/* Sikrer sig at koden kører på de rigtige tidspunkter */
document.addEventListener("DOMContentLoaded", () => {
  const path = window.location.pathname;

  if (path.includes("likes.html")) {
    filter();
  } /* Filter kører kun på likes.html */
});

/* Eksporter likes funktionen */
export const likes = () => {
    /* opretter variabel til likes-container */
    const likesContainer = document.querySelector(".likes-container");
    if (!likesContainer) {
        return; /* hvis ikke likes-container findes skal den gå tilbage */
    } 

    /* Sørger for localstorage kan hente data fra likes */
    let likedProfiles = JSON.parse(localStorage.getItem("likes")) || [];

    if (likedProfiles.length === 0) {
        likesContainer.innerHTML = `<p>You have not liked any people</p>`;
        return;
        /* Fortæller at der ikke er nogle liked profiler, hvis man ikke har trykket like på nogle profiler */
    }

    renderAllLikedProfiles(likedProfiles);
};

// Funktion til at vise alle likede profiler
const renderAllLikedProfiles = (profiles) => {
    const likesContainer = document.querySelector(".likes-container");
    likesContainer.innerHTML = ""; // Ryd containeren

    profiles.forEach(profile => {
        likesContainer.insertAdjacentHTML("beforeend", likesTemplate(profile));
    });

    addEventListeners();
};

