/* Eksporterer vores filter */

export const filter = () => {
  const hobbySelect = document.querySelector("#hobby");

  if (!hobbySelect) {
    return; /* Hvis ikke #hobby eksisterer går den tilbage */
  }

  // Lyt efter ændringer i dropdown-menuen
  hobbySelect.addEventListener("change", () => {
    const selectedHobby = hobbySelect.value.toLowerCase();

    // Find alle profiler på siden (tjek at de har class="profile-card")
    const allProfiles = document.querySelectorAll(".profile-card");

    if (allProfiles.length === 0) {
      return; /* hvis ikke profile-card findes går den tilbage */
    }

    // Loop igennem alle profiler og filtrer baseret på hobby
    allProfiles.forEach((profile) => {
      const profileHobby = profile.dataset.hobby?.toLowerCase();

      if (selectedHobby === "all" || profileHobby === selectedHobby) {
        profile.style.display = "block"; // Vis profilen
      } else {
        profile.style.display = "none"; // Skjul profilen
      }
    });
  });
};
