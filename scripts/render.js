/* Importerer templates og fetchProfiles */
import { profileTemplate, superLikesTemplate } from "./templates.js";
import { fetchProfiles } from "./fetch.js";

let currentProfileIndex = 0; /* Fortæller den skal starte ved det første objekt */
let profil = []; /* Opretter et array til profilerne */

export const renderProfiles = async () => {
    const profileContainer = document.querySelector(".profile-container");
    if (!profileContainer) {;
        return; /* Hvis ikke profile-container findes går den tilbage */
    }

    profil = await fetchProfiles();

    /* Hvis ikke der kan findes nogle profiler i vores profile array, udskrives der en fejlbesked */
    if (!profil || !Array.isArray(profil) || profil.length === 0) {
        profileContainer.innerHTML = `<p>No profiles to show</p>`;
        return;
    }

    /* Sørger for at profileTemplate udskrives */
    const renderProfile = (index) => {
        if (index < profil.length) {
            profileContainer.innerHTML = profileTemplate(profil[index]);
            addEventListeners(); 
        } 
    };

    /* Sørger for man kan gå til den næste profil */
    const nextProfile = () => {
        if (currentProfileIndex < profil.length - 1) {
            currentProfileIndex++;
            renderProfile(currentProfileIndex);
        } else {
            window.location.href = "likes.html";
        }
    };

    /* Gemmer liked profiler */
    const likeProfile = () => {
      let likes = JSON.parse(localStorage.getItem("likes")) || []; /* Henter eksisterende likes fra localstorage */
      const userToAdd = profil[currentProfileIndex]; /* Henter den aktuelle profil baseret på indexet */

      if (!userToAdd || typeof userToAdd !== "object" || userToAdd.id == null) {
        return; /* Sikrer, at profilen er gyldig, før den tilføjes */
      }

      const userCopy = { ...userToAdd };  /* Laver en kopi af brugerobjektet for at undgå utilsigtede ændringer */

      if (!likes.some((user) => user.id === userCopy.id)) { /* Sikrer sig profilen ikke allerede eksisterer i vores array */
        likes.push(userCopy); /* Tilføjer profilen til likes */
        localStorage.setItem("likes", JSON.stringify(likes)); /* Gemmer den opdaterede liste */
      }

      nextProfile(); /* Kalder funktionen */
    };

   /* Ny funktion til at tilføje event listeners efter rendering */
    const addEventListeners = () => {
        const likeBtn = document.querySelector(".likeBtn"); /* finder like knappen */
        const dislikeBtn = document.querySelector(".dislikeBtn"); /* finder dislike knappen */

        /* eventlisteners på vores kanpper */
        if (likeBtn && dislikeBtn) {
            likeBtn.addEventListener("click", likeProfile); 
            dislikeBtn.addEventListener("click", nextProfile);
        } 
    };

    renderProfile(currentProfileIndex); /* Viser første profil */

    /* Lægger funktionerne lokalt */
    window.currentProfileIndex = currentProfileIndex;
    window.nextProfile = nextProfile;
    window.likeProfile = likeProfile;


  if (profileContainer) {

    /* popover funktionalitet */
    /* Variabler oprettes */
  const btnQuickView = document.querySelectorAll(".btn-quickview");
  const popover = document.querySelector(".quickview-content")

  /* Sørger for alle knapperne virker */
    btnQuickView.forEach((btn) => {
      btn.addEventListener("click", () => { /* Event listener til knappen */
        const foundProfil = profil.find((profil) => profil.id == btn.id); /* sikrer sig det er det rigtige id */
        popover.innerHTML = superLikesTemplate(foundProfil); /* udskriver template */
      });
    }); 
  } 
  
};
