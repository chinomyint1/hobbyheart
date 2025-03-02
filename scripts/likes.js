import { likesTemplate } from "./templates.js";
import { filter } from "./filter.js";

document.addEventListener("DOMContentLoaded", () => {
  const path = window.location.pathname;

  if (path.includes("likes.html")) {
    console.log("✅ Likes side - kører filter()");
    filter();
  }
});


export const likes = () => {
    const likesContainer = document.querySelector(".likes-container");

    if (!likesContainer) {
        console.error("❌ Fejl: .likes-container findes ikke!");
        return;
    }

    let likedProfiles = JSON.parse(localStorage.getItem("likes")) || [];

    if (likedProfiles.length === 0) {
        likesContainer.innerHTML = `<p>Du har ingen likede profiler.</p>`;
        return;
    }

    renderAllLikedProfiles(likedProfiles);
    console.log("✅ Likes side indlæst med", likedProfiles.length, "profiler.");
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

// Funktion til at fjerne en liket profil
const removeLike = (profileId) => {
    let likedProfiles = JSON.parse(localStorage.getItem("likes")) || [];

    likedProfiles = likedProfiles.filter(profile => profile.id !== profileId);
    localStorage.setItem("likes", JSON.stringify(likedProfiles));

    renderAllLikedProfiles(likedProfiles);
};

// Tilføjer event listeners til "Fjern" knapper
const addEventListeners = () => {
    document.querySelectorAll(".removeLikeBtn").forEach(button => {
        button.addEventListener("click", (event) => {
            const profileId = parseInt(event.target.dataset.profileId, 10);
            removeLike(profileId);
        });
    });


    /* const addToLikes = (e) => {
        const profileID = e.target.id 
        const likeToAdd = profiles.find((profile) => profile.id == profileID)

        const exist = likesArray.find((profile) => profile.id == profileID)

        if (!exist) {
            likesArray.push(likeToAdd)

            localStorage.setItem("likeList", JSON.stringify(likesArray))
        }
    } */

   /*  const likeBtn = document.querySelectorAll(".likeBtn")
    likeBtn.forEach((btn) => {
        btn.addEventListener("click", addToLikes)
    }) */
}