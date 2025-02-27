import { profileTemplate, superLikesTemplate } from "./templates.js";

const profil = await fetchProfiles();

export const renderProfiles = () => {
  const popover = document.querySelector(".quickview-content");
  const profilContainer = document.querySelector(".product-container");

  if (profilContainer) {
    profil.forEach((profil) => {
      profilContainer.innerHTML += profileTemplate(profil);
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