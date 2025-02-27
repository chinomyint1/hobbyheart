import { profileTemplate, superLikesTemplate } from "./templates.js";
import { fetchProfiles } from "./fetch.js";

const profil = await fetchProfiles();

export const renderProfiles = () => {
  const popover = document.querySelector(".quickview-content");
  const profileContainer = document.querySelector(".profile-container");
console.log("test")
  if (profileContainer) {
    profil.forEach((profil) => {
      profileContainer.innerHTML = profileTemplate(profil);
    });

    /* popover funktionalitet */
    const btnQuickView = document.querySelectorAll(".btn-quickview");

    btnQuickView.forEach((btn) => {
      btn.addEventListener("click", () => {
        const foundProfil = profil.find((profil) => profil.id == btn.id);
        console.log(foundProfil);
        popover.innerHTML = superLikesTemplate(foundProfil);
      });
    });
  }
};