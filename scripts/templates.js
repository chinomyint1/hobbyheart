/* Eksporterer template der vises på index.html */
export const profileTemplate = (profil) => {
    return `
    <div class="profile">
    <img src="${profil.image}" alt="" class="profile-img">
    <div class="overlay-for-name">
    <h1 class="name">${profil.username}, ${profil.age}
    </div>
    <div class="buttons">
    <button class="likeBtn" id="${profil.id}"><i class="fa-solid fa-heart" id="like-btn"></i></button>
    <button class="btn-quickview" id="${profil.id}" popovertarget="myheader"><i class="fa-solid fa-crown"></i></button>
    <button class="dislikeBtn" id="${profil.id}"><i class="fa-solid fa-xmark"></i></button>
    </div>
    <div class="text">
    <p>Likes ${profil.hobby}</p>
    <p>Looking for ${profil.searching}</p>
    <p>Lives in ${profil.city}</p>
    </div>
    <i class="quote">${profil.quote}</i>
    <a href="/single.html?id=${profil.id}"><button class="see-profile">See profile</button></a>
    </profile>
    `;
}

/* Eksporterer template der vises på single.html */
export const singleProfileTemplate = (profil) => {
  return `
    <div class="single-profile-card">
    <div class="single-profile-top">
    <img src="${profil.image}" alt="" class="single-profile-img">
    <div class="single-text">
    <h2 class="single-name">${profil.username}, ${profil.age}</h2>
    <p>Likes ${profil.hobby}</p>
    <p>Looking for ${profil.searching}</p>
    <p>Lives in ${profil.city}</p>
    <p>Sexuality is ${profil.sexuality}</p>
    <p>Relationship status is ${profil.status}</p>
    </div>
    </div>
    <div class="single-profile-bottom">
    <i>${profil.quote}</i>
    <p>Who I am<br>${profil.description}</p>
    <a href="index.html"><button class="return">Return</button></a>
    </div>
    </div>
    `;
};

/* Eksporterer template der vises på likes.html */
export const likesTemplate = (profile) => `
    <div class="profile-card" data-hobby="${profile.hobby}">
    <a href="single.html?id=${profile.id}" class="likes-profile">
    <div class="likes-profile-container">
    <img src="${profile.image}" class="likes-profile-img" />
    <div class="overlay-liked">
    <h2>${profile.username}</h2>
    <p>${profile.age}</p>
    <p>${profile.hobby}</p>
    </div>
    </div>
    </a>
    </div>
`;

/* Eksporter template der vises ved tryk på superLike */
export const superLikesTemplate = (profil) => {
    return `
    <video controls src="media/video.mp4" class="video">
    </video>
    <button class="messageBtn">Send message</button>
    `;
}