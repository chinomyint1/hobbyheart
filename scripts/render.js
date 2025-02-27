import { profileTemplate, superLikesTemplate } from "./templates.js";
import { fetchProfiles } from "./fetch.js";

const profil = await fetchProfiles();

export const renderProfiles = () => {
  const popover = document.querySelector(".quickview-content");
  const profileContainer = document.querySelector(".profile-container");

  /* Swipe */
  let slidesLength = slides.length - 1
  let currentimageIndex = 0

  const setaActiveSlide = (index) => {
    slides.forEach( (slide) => {
      slide.classList.remove('active')
    })

    slides[index].classList.add('active')
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
    const userToAdd = users.find ((user) => user.id == currentimageIndex) 
    const exist = likes.find(user => user.id === userToAdd.id)

    if(!exist){
      likes.push(userToAdd)
      localStorage.setItem('likes', JSON.stringify(likes))
    }

    next()
  }

  const likeBtn = document.querySelector('.like')
  const dislikeBtn = document.querySelector('.dislike')

  likeBtn.addEventListener('click', like)
  dislikeBtn.addEventListener('click', next)

  setaActiveSlide(currentimageIndex)



  /* Udskrivning */
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