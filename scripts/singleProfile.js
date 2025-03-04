/* Importerer funktioner */
import { fetchProfiles } from "./fetch.js"; 
import { singleProfileTemplate } from "./templates.js";

export const pageProfile = async () => {

  /* Opretter variabel */
  const singleProfile = document.querySelector(".single-profile");
  if (!singleProfile) {
    return; /* går tilbage hvis single-profile ikke findes */
  }

  /* får fat i idet */
  const profileID = new URLSearchParams(location.search).get("id");

  if (!profileID) {
    singleProfile.innerHTML = `<p>Error: No profile found</p>`;
    return; /* giver fejlbesked hvis ikke profileID findes */
  }

  try {
    const profiles = await fetchProfiles();

    const foundProfile = profiles.find((profile) => profile.id == profileID); /* Sikrer sig det er det rigtige ID */


    if (!foundProfile) {
      singleProfile.innerHTML = `<p>Error: Profile not found</p>`;
      return; /* Giver fejlbesked hvis ikke foundProfile kan findes */
    }

    singleProfile.innerHTML = singleProfileTemplate(foundProfile); /* Udskriver singleProfileTemplate */
  } catch (error) {
    console.error("error collecting profiles", error);
    singleProfile.innerHTML = `<p>Error: Could not collect profiles</p>`;
  }
};

export default pageProfile;
