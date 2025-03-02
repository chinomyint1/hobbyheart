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
    <p>Living in ${profil.city}</p>
    </div>
    <i class="quote">${profil.quote}</i>
    <button class="see-profile"><a href="/single.html?id=${profil.id}">See profile</a></button>
    </profile>
    `;
}

export const singleProfileTemplate = (profil) => {
    return `
    <div class="single-profile">
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
    <button class="return"><a href="index.html">Return</a></button>
    </div>
    `;
}

export const likesTemplate = (profile) => `
    <div class="profile-card" data-hobby="${profile.hobby.toLowerCase()}">
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





export const superLikesTemplate = (profil) => {
    return `
    <video width="320" height="240" controls src="">
    </video>
    <button class="closeBtn">Send message</button>
    `;
}