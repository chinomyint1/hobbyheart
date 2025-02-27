import { fetchProfiles } from "./fetch.js"
import { likesTemplate } from "./templates.js"

const profiles = await fetchProfiles()

export const likes = () => {
    const likesContainer = document.querySelector('.likes-container')

    let likesArray = JSON.parse(localStorage.getItem("likeList")) || []

    const likesList = () => {
        if (likesContainer) {
            if (likesArray.length != 0) {
                likesContainer.innerHTML = ""

                likesArray.forEach((fav) => {
                    likesContainer.insertAdjacentHTML("beforeend", likesTemplate(likes))
                })
            } else {
            likesContainer.innerHTML = `
            <span class="empty-list">You have not liked anyone</span>
            `
            }
        }
        const removeLikeBtn = document.querySelectorAll(".removeLikesBtn")

        removeLikeBtn.forEach((btn) => {
            btn.addEventListener("click", removeFromLikes)
        })
    }
    likesList()

    /* const addToLikes = (e) => {
        const profileID = e.target.id 
        const likeToAdd = profiles.find((profile) => profile.id == profileID)

        const exist = likesArray.find((profile) => profile.id == profileID)

        if (!exist) {
            likesArray.push(likeToAdd)

            localStorage.setItem("likeList", JSON.stringify(likesArray))
        }
    } */

   /*  const likeBtn = document.querySelectorAll(".likeBtn")
    likeBtn.forEach((btn) => {
        btn.addEventListener("click", addToLikes)
    }) */

    function removeFromLikes (e){
        const profileID = e.target.id

        const index = likesArray.findIndex
        ((profile) => profile.id == profileID)

        likesArray.splice(index, 1)

        localStorage.setItem("likeList", JSON.stringify(likesArray))
        likesList()

        if(likesArray.length == 0) {
            localStorage.removeItem('likeList')
        }
    }
}