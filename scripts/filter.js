export const filter = () => {
  const hobbySelect = document.querySelector("#hobby");

  if (!hobbySelect) {
    return;
  }

  // Lyt efter ændringer i dropdown-menuen
  hobbySelect.addEventListener("change", () => {
    const selectedHobby = hobbySelect.value.toLowerCase();

    // Find ALLE profiler på siden (tjek at de har class="profile-card")
    const allProfiles = document.querySelectorAll(".profile-card");

    if (allProfiles.length === 0) {
      return;
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
