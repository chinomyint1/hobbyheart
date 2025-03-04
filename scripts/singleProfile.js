import { fetchProfiles } from "./fetch.js"; // Sørg for at fetch.js er i samme mappe!
import { singleProfileTemplate } from "./templates.js";

export const pageProfile = async () => {
  console.log("✅ Kører pageProfile()");

  const singleProfile = document.querySelector(".single-profile");
  if (!singleProfile) {
    console.error("❌ Fejl: .single-profile findes ikke!");
    return;
  }

  const profileID = new URLSearchParams(location.search).get("id");
  console.log("🔍 Hentet profil ID fra URL:", profileID);

  if (!profileID) {
    singleProfile.innerHTML = `<p>Fejl: Ingen profil fundet!</p>`;
    return;
  }

  try {
    const profiles = await fetchProfiles();
    console.log("✅ Profiler hentet:", profiles);

    const foundProfile = profiles.find((profile) => profile.id == profileID);
    console.log("🔍 Fundet profil:", foundProfile);

    if (!foundProfile) {
      singleProfile.innerHTML = `<p>Fejl: Profil ikke fundet!</p>`;
      return;
    }

    singleProfile.innerHTML = singleProfileTemplate(foundProfile);
    console.log("✅ Profil indsat i HTML");
  } catch (error) {
    console.error("❌ Fejl ved hentning af profiler:", error);
    singleProfile.innerHTML = `<p>Fejl: Kunne ikke hente profiler.</p>`;
  }
};

export default pageProfile;
