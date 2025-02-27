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

  /* Swipe */
    profil.forEach(user => {
      profileContainer.insertAdjacentHTML('beforeend', profileTemplate (user))
    })
 

  const profilHtml = document.querySelectorAll('.profile')
  let slidesLength = profilHtml.length - 1
  let currentimageIndex = 0

  const setaActiveSlide = (index) => {
    profilHtml.forEach( (slide) => {
      slide.classList.remove('active')
    })

    profilHtml[index].classList.add('active')
  }

  const next = () => {
    if(currentimageIndex >= slidesLength) {
      currentimageIndex = 0
    } else {
      currentimageIndex += 1
    }

    setaActiveSlide(currentimageIndex)
  }

  const like = () => {
    let likes = JSON.parse(localStorage.getItem ("likes")) || []
    const userToAdd = profil.find ((user) => user.id == currentimageIndex) 
    const exist = likes.find(user => user.id === userToAdd.id)

    if(!exist){
      likes.push(userToAdd)
      localStorage.setItem('likes', JSON.stringify(likes))
    }

    next()
  }

  const likeBtn = document.querySelector(".likeBtn");
  const dislikeBtn = document.querySelector('.dislikeBtn')

  likeBtn.addEventListener('click', like)
  dislikeBtn.addEventListener('click', next)

  setaActiveSlide(currentimageIndex)



  /* Udskrivning */
  
/*   if (profileContainer) {
    profil.forEach((profil) => {
      profileContainer.innerHTML = profileTemplate(profil);
>>>>>>> f6f8c8ce80a9b2ebb8622da8b66aeaed68e0dc4a
    });

    /* popover funktionalitet */
    /* const btnQuickView = document.querySelectorAll(".btn-quickview");

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
  */
};