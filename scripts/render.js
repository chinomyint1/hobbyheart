/* Importerer templates og fetchProfiles */
import { profileTemplate, superLikesTemplate } from "./templates.js";
import { fetchProfiles } from "./fetch.js";

/* Sørger for den starter ved den første profil */
let currentProfileIndex = 0; 
let profil = []; /* Opretter et array */

/* Exporterer renderProfiles funktionen */
export const renderProfiles = async () => {
  const profileContainer =
    document.querySelector(".profile-container"); /* Opretter en variabel */
  if (!profileContainer) {
    return; /* hvis ikke profile-container findes, skal den gå tilbage */
  }

  /* Venter på at fetchProfiles bliver loaded */
  profil = await fetchProfiles();

  // Tjekker om 'profil' er gyldig, dvs. at den ikke er null, at den er en array, og at den indeholder mindst ét element
  if (!profil || !Array.isArray(profil) || profil.length === 0) {
    profileContainer.innerHTML = `<p>No profiles to show</p>`; // Hvis ikke, vises en besked om, at der ikke er nogen profiler at vise
    return; // Afslutter funktionen tidligt
  }

  // Funktion til at vise en specifik profil baseret på en index-værdi
  const renderProfile = (index) => {
    if (index < profil.length) {
      // Sikrer, at indexet ikke er uden for arrayets grænser
      profileContainer.innerHTML = profileTemplate(profil[index]); // Indsætter HTML-indholdet for profilen i DOM'en
      addEventListeners(); // Tilføjer event listeners efter rendering (mere om dette nedenfor)
    }
  };

  // Funktion til at gå til næste profil
  const nextProfile = () => {
    if (currentProfileIndex < profil.length - 1) {
      // Tjekker om der er flere profiler tilbage
      currentProfileIndex++; // Opdaterer indexet til næste profil
      renderProfile(currentProfileIndex); // Renderer den næste profil
    } else {
      window.location.href = "likes.html"; // Hvis der ikke er flere profiler, omdirigeres brugeren til "likes.html"
    }
  };

  // Funktion til at like en profil og gemme den i localStorage
  const likeProfile = () => {
    let likes = JSON.parse(localStorage.getItem("likes")) || []; // Henter eksisterende likes fra localStorage eller opretter en tom array
    const userToAdd = profil[currentProfileIndex]; // Henter den aktuelle profil baseret på indexet

    if (!userToAdd || typeof userToAdd !== "object" || userToAdd.id == null) {
      return; // Sikrer, at profilen er gyldig, før den tilføjes
    }

    const userCopy = { ...userToAdd }; // Laver en kopi af brugerobjektet for at undgå utilsigtede ændringer

    if (!likes.some((user) => user.id === userCopy.id)) {
      // Tjekker om profilen allerede er liket
      likes.push(userCopy); // Tilføjer profilen til listen over likes
      localStorage.setItem("likes", JSON.stringify(likes)); // Gemmer den opdaterede liste i localStorage
    }

    nextProfile(); // Går automatisk videre til næste profil
  };

  // Funktion til at tilføje event listeners til knapperne efter at en profil er renderet
  const addEventListeners = () => {
    const likeBtn = document.querySelector(".likeBtn"); // Finder 'like' knappen
    const dislikeBtn = document.querySelector(".dislikeBtn"); // Finder 'dislike' knappen

    if (likeBtn && dislikeBtn) {
      // Sikrer, at begge knapper findes i DOM'en, før event listeners tilføjes
      likeBtn.addEventListener("click", likeProfile); // Tilføjer event listener til like-knappen
      dislikeBtn.addEventListener("click", nextProfile); // Tilføjer event listener til dislike-knappen
    }
  };

  renderProfile(currentProfileIndex); // Viser første profil

  // Gør funktioner globalt tilgængelige i Developer Console
  window.currentProfileIndex = currentProfileIndex;
  window.nextProfile = nextProfile;
  window.likeProfile = likeProfile;

  /* Udskrivning */

  if (profileContainer) {
    /* popover funktionalitet */
    const btnQuickView = document.querySelectorAll(".btn-quickview");
    const popover = document.querySelector(".quickview-content");

    btnQuickView.forEach((btn) => {
      btn.addEventListener("click", () => {
        const foundProfil = profil.find((profil) => profil.id == btn.id);
        console.log(foundProfil);
        popover.innerHTML = superLikesTemplate(foundProfil);
      });
    });
  }
};
