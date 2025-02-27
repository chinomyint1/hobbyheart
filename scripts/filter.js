import { fetchProfiles } from "./fetch.js";
import { profileTemplate } from "./templates.js";

const profiles = await fetchProfiles()

const profileContainer = document.querySelector('.profile-container')

export const filter = () => {
    const renderResult = (result) => {
        profileContainer.innerHTML = ''
        result.forEach(element => {
            profileContainer.insertAdjacentElement('beforeend', profileTemplate (element))
            
        })
    }

    const hobby = document.querySelector
}
