/* Eksporterer function der henter data */
export const fetchProfiles = async () => {
    try {
      const response = await fetch("../data/profil.json");
      const profiles = await response.json();
      return profiles;
    } catch (error) {
      console.error("Error fetching or parsing data", error);
    } /* Fejlbesked hvis ikke dataen kan hentes */
}