import { profileTemplate, singleProfileTemplate, likesTemplate } from "./templates.js";

const products = await fetchProducts();

export const renderProducts = () => {
  const popover = document.querySelector(".quickview-content");
  const productContainer = document.querySelector(".product-container");

  if (productContainer) {
    products.forEach((product) => {
      productContainer.innerHTML += productTemplate(product);
    });

    /* popover funktionalitet */
    const btnQuickView = document.querySelectorAll(".btn-quickview");

    btnQuickView.forEach((btn) => {
      btn.addEventListener("click", () => {
        const foundProduct = products.find((product) => product.id == btn.id);
        console.log(foundProduct);
        popover.innerHTML = quickProductTemplate(foundProduct);
      });
    });
  }
};