/* Eksporterer templates */

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
    <button class="see-profile"><a href="/single.html?id=${profil.id}">See profile</a></button>
    </profile>
    `;
}

export const singleProfileTemplate = (profil) => {
    return `
    <div class="single-profile-card">
    <img src="${profil.image}" alt="" class="single-profile-img">
    <div class="single-text">
    <h2 class="single-name">${profil.username}, ${profil.age}</h2>
    <p>Likes ${profil.hobby}</p>
    <p>Looking for ${profil.searching}</p>
    <p>Lives in ${profil.city}</p>
    <p>Sexuality is ${profil.sexuality}</p>
    <p>Relationship status is ${profil.status}</p>
    <i>${profil.quote}</i>
    <p>Who I am 
    <br>${profil.description}</p>
    <button class="return"><a href="index.html">Return</a></button>
    </div>
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
    <button class="messageBtn">Send message</button>
    `;
}