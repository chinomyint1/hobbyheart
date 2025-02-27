import { profileTemplate, superLikesTemplate } from "./templates.js";

<<<<<<< Updated upstream
const profil = await fetchProfiles();
=======
const products = await fetchProfiles();
>>>>>>> Stashed changes

export const renderProfiles = () => {
  const popover = document.querySelector(".quickview-content");
  const profilContainer = document.querySelector(".product-container");

<<<<<<< Updated upstream
  if (profilContainer) {
    profil.forEach((profil) => {
      profilContainer.innerHTML += profileTemplate(profil);
=======
  if (productContainer) {
    products.forEach((product) => {
      productContainer.innerHTML += profileTemplate(product);
>>>>>>> Stashed changes
    });

    /* popover funktionalitet */
    const btnQuickView = document.querySelectorAll(".btn-quickview");

    btnQuickView.forEach((btn) => {
      btn.addEventListener("click", () => {
<<<<<<< Updated upstream
        const foundProfil = profil.find((profil) => profil.id == btn.id);
        console.log(foundProfil);
        popover.innerHTML = superLikesTemplate(foundProfil);
=======
        const foundProduct = products.find((product) => product.id == btn.id);
        console.log(foundProduct);
        popover.innerHTML = superLikesTemplate(foundProduct);
>>>>>>> Stashed changes
      });
    });
  }
};