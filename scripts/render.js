import { profileTemplate, superLikesTemplate } from "./templates.js";
import { fetchProfiles } from "./fetch.js";

const profil = await fetchProfiles();

export const renderProfiles = () => {
  const popover = document.querySelector(".quickview-content");
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
  } 
  */
};