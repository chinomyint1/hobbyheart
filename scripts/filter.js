import { fetchProfiles } from "./fetch.js";
import { profileTemplate } from "./templates.js";

const profiles = await fetchProfiles()

const profileContainer = document.querySelector('.profile-container')

export const filter = () => {
    const renderResult = (result) => {
        profileContainer.innerHTML = ''
        result.forEach(element => {
            profileContainer.insertAdjacentHTML('beforeend', profileTemplate (element))
            
        })


    }
    const searchInput = () => {
    const hobby = document.querySelector('#hobby').value

    const findHobby = profiles.filter(profiles.hobby == hobby)

    const result = findHobby
    renderResult(result)
    }
}

