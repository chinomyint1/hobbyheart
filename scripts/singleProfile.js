import { singleProfileTemplate } from "./templates.js";
import { fetchProfiles } from "./fetch.js";

const profile = await fetchProfiles()

export const pageProfile = () => {
  const singleProfile = document.querySelector('.single-profile')
  if (singleProfile) {
    const search = location.search
    
    const profileID = new URLSearchParams(search).get("id")

    const foundProfile = profile.find((profile) => profile.id == profileID)
    singleProfile.innerHTML = singleProfileTemplate (foundProfile)
  }
}

export default pageProfile
