/* Eksporterer fetchProfiles, som kalder på vores data */

export const fetchProfiles = async () => {
    try {
      const response = await fetch("../data/profil.json");
      const profiles = await response.json();
      return profiles;
    } catch (error) {
      console.error("Error fetching or parsing data", error);
    }
}