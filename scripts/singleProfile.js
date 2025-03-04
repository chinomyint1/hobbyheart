import { fetchProfiles } from "./fetch.js";
import { singleProfileTemplate } from "./templates.js";

// Funktion til at vise en specifik profil på siden
export const pageProfile = async () => {
  // Finder HTML-elementet, hvor profilen skal vises
  const singleProfile = document.querySelector(".single-profile");

  // Hvis elementet ikke findes på siden, afslut funktionen
  if (!singleProfile) {
    return;
  }

  // Henter ID'et fra URL'ens query parameters (f.eks. ?id=123)
  const profileID = new URLSearchParams(location.search).get("id");

  // Hvis der ikke er noget ID i URL'en, vis en fejlbesked og afslut
  if (!profileID) {
    singleProfile.innerHTML = `<p>No profile found</p>`;
    return;
  }

  try {
    // Henter listen af profiler fra fetch.js
    const profiles = await fetchProfiles();

    // Finder den profil, der matcher det ID, som er hentet fra URL'en
    const foundProfile = profiles.find((profile) => profile.id == profileID);

    // Hvis der ikke findes en profil med det ID, vis en fejlbesked
    if (!foundProfile) {
      singleProfile.innerHTML = `<p>Error: Profile not found</p>`;
      return; 
    }

    // Hvis profilen blev fundet, generer HTML ved hjælp af singleProfileTemplate og indsætter den i DOM'en
    singleProfile.innerHTML = singleProfileTemplate(foundProfile);
  } catch (error) {
    // Hvis der opstår en fejl, log fejlen og vis en fejlbesked til brugeren
    console.error("Error with collecting profiles", error);
    singleProfile.innerHTML = `<p>Error: Could not collect profiles</p>`;
  }
};

// Eksporterer funktionen som standard, så den kan importeres og bruges andre steder
export default pageProfile;
