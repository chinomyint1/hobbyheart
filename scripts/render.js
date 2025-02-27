import { profileTemplate } from "./templates.js";
import { fetchProfiles } from "./fetch.js";

const profiles = await fetchProfiles();
let currentProfileIndex = 0; // Starter med første profil

export const renderProfiles = () => {
    const profileContainer = document.querySelector(".profile-container");

    if (profiles.length === 0) return; // Stop hvis der ikke er nogen profiler

    // Funktion til at vise en specifik profil
    const showProfile = (index) => {
        profileContainer.innerHTML = ""; // Ryd containeren
        profileContainer.insertAdjacentHTML('beforeend', profileTemplate(profiles[index]));
    };

    // Funktion til at skifte til næste profil
    const nextProfile = () => {
        if (currentProfileIndex < profiles.length - 1) {
            currentProfileIndex++; // Gå til næste
            showProfile(currentProfileIndex);
        } else {
            // Når alle profiler er set, omdiriger brugeren til likes.html
            window.location.href = "likes.html";
        }
    };

    // Funktion til at like en profil
    const likeProfile = () => {
        let likes = JSON.parse(localStorage.getItem("likes")) || [];
        const userToAdd = profiles[currentProfileIndex];

        // Undgå dubletter
        if (!likes.some(user => user.id === userToAdd.id)) {
            likes.push(userToAdd);
            localStorage.setItem("likes", JSON.stringify(likes));
        }

        nextProfile(); // Skift til næste profil
    };

    // Start med at vise første profil
    showProfile(currentProfileIndex);

    // Brug event delegation til at fange klik på like/dislike-knapper
    document.body.addEventListener("click", (e) => {
        if (e.target.closest(".likeBtn")) {
            likeProfile();
        } else if (e.target.closest(".dislikeBtn")) {
            nextProfile();
        }
    });





  /* Udskrivning */
  
/* if (profileContainer) {
    profil.forEach((profil) => {
      profileContainer.innerHTML = profileTemplate(profil);
    });

    /* popover funktionalitet */
/* const btnQuickView = document.querySelectorAll(".btn-quickview");

    btnQuickView.forEach((btn) => {
      btn.addEventListener("click", () => {
        const foundProfil = profil.find((profil) => profil.id == btn.id);
        console.log(foundProfil);
        popover.innerHTML = superLikesTemplate(foundProfil);
      });
    }); 
  }  */
}; 