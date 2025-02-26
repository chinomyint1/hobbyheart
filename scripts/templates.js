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
    <p>${profil.hobby}</p>
    <p>${profil.searching}</p>
    <p>${profil.city}</p>
    </div>
    <p>${profil.quote}</p>
    <button><a href="single.html?id=${profil.id}">See profile</a></button>
    </profile>
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

export const likesTemplate = (profil) => {
    return `
    <a href="single.html?id=${profil.id}">
    <img src="${profil.image}" alt="" class="profile-img"></a>
    <div class="overlay-liked">
    <p>${profil.username}</p>
    <p>${profil.age}</p>
    <p>${profil.hobby}</p>
    </div>

    <button class="removeLikeBtn" id="${profil.id}">Remove from likes</button>
    `;
}

export const superLikesTemplate = (profil) => {
    return `
    <video width="320" height="240" controls src="">
    </video>
    <button class="closeBtn">Send message</button>
    `;
}