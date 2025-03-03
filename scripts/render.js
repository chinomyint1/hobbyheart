import { profileTemplate, superLikesTemplate } from "./templates.js";
import { fetchProfiles } from "./fetch.js";

let currentProfileIndex = 0; // Gør variablen global
let profil = []; // Gemmer profilerne globalt

export const renderProfiles = async () => {
    const profileContainer = document.querySelector(".profile-container");
    if (!profileContainer) {;
        return;
    }

    profil = await fetchProfiles();

    if (!profil || !Array.isArray(profil) || profil.length === 0) {
        profileContainer.innerHTML = `<p>Ingen profiler at vise.</p>`;
        return;
    }

    const renderProfile = (index) => {
        if (index < profil.length) {
            profileContainer.innerHTML = profileTemplate(profil[index]);
            addEventListeners(); 
        } 
    };

    const nextProfile = () => {
        if (currentProfileIndex < profil.length - 1) {
            currentProfileIndex++;
            renderProfile(currentProfileIndex);
        } else {
            window.location.href = "likes.html";
        }
    };

    const likeProfile = () => {
        let likes = JSON.parse(localStorage.getItem("likes")) || [];
        const userToAdd = profil[currentProfileIndex];

        if (!userToAdd || typeof userToAdd !== "object" || userToAdd.id == null) {
            return;
        }

        const userCopy = { ...userToAdd };

        if (!likes.some((user) => user.id === userCopy.id)) {
            likes.push(userCopy);
            localStorage.setItem("likes", JSON.stringify(likes));
            console.log("✅ Profil liket og gemt:", userCopy);
        }

        nextProfile();
    };

    // 🚀 Ny funktion til at tilføje event listeners efter rendering
    const addEventListeners = () => {
        const likeBtn = document.querySelector(".likeBtn");
        const dislikeBtn = document.querySelector(".dislikeBtn");

        if (likeBtn && dislikeBtn) {
            likeBtn.addEventListener("click", likeProfile);
            dislikeBtn.addEventListener("click", nextProfile);
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
  const popover = document.querySelector(".quickview-content")

    btnQuickView.forEach((btn) => {
      btn.addEventListener("click", () => {
        const foundProfil = profil.find((profil) => profil.id == btn.id);
        console.log(foundProfil);
        popover.innerHTML = superLikesTemplate(foundProfil);
      });
    }); 
  } 
  
};
