import { profileTemplate, superLikesTemplate } from "./templates.js";
import { fetchProfiles } from "./fetch.js";

<<<<<<< Updated upstream
const profil = await fetchProfiles();
=======
const products = await fetchProfiles();
>>>>>>> Stashed changes

export const renderProfiles = () => {
  const popover = document.querySelector(".quickview-content");
<<<<<<< HEAD
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
=======
  const profileContainer = document.querySelector(".profile-container");
console.log("test")
  if (profileContainer) {
    profil.forEach((profil) => {
      profileContainer.innerHTML = profileTemplate(profil);
>>>>>>> f6f8c8ce80a9b2ebb8622da8b66aeaed68e0dc4a
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