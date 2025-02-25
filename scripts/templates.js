export const profileTemplate = (profil) => {
    return `
    <img src="${profil.image}" alt="" class="profile-img">
    <div class="overlay-for-name">
    <h1 class="name">${profil.username}, ${profil.age}
    </div>
    <div class="buttons">
    <i class="fa-solid fa-heart" id="like-btn"></i>
    <i class="fa-solid fa-crown"></i>
    <i class="fa-solid fa-xmark"></i>
    </div>
    <div class="text">
    <p>${profil.hobby}</p>
    <p>${profil.searching}</p>
    <p>${profil.city}</p>
    </div>
    <p>${profil.quote}</p>
    <button><a href="single.html?id=${profil.id}">See profile</a></button>
    `;
}

export const singleProfileTemplate = (profil) => {
    return `
    <div class="profile">
    <img src="${profil.image}" alt="" class="profile-img">
    <div class="text">
    <p>${profil.username}</p>
    <p>${profil.age}</p>
    <p>${profil.hobby}</p>
    <p>${profil.searching}</p>
    <p>${profil.city}</p>
    <p>${profil.sexuality}</p>
    <p>${profil.status}</p>
    </div>

    <p>${profil.quote}</p>
    <p>${profil.description}</p>
    </div>
    `;
}

export const likesTemplate = (profile) => {
    return `
    <a href="single.html?id=${profil.id}">
    <img src="${profil.image}" alt="" class="profile-img"></a>
    <div class="overlay-liked"></div>
    <p>${profil.username}</p>
    <p>${profil.age}</p>
    <p>${profil.hobby}</p>
    `;
}