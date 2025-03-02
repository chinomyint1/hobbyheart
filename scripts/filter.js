export const filter = () => {
  const hobbySelect = document.querySelector("#hobby");

  if (!hobbySelect) {
    console.error("❌ Fejl: Hobby-dropdown findes ikke!");
    return;
  }

  console.log("✅ Filter-funktionalitet tilføjet til likes siden.");

  // Lyt efter ændringer i dropdown-menuen
  hobbySelect.addEventListener("change", () => {
    const selectedHobby = hobbySelect.value.toLowerCase();
    console.log(`🎯 Filtrerer likede profiler efter hobby: ${selectedHobby}`);

    // Find ALLE profiler på siden (tjek at de har class="profile-card")
    const allProfiles = document.querySelectorAll(".profile-card");

    if (allProfiles.length === 0) {
      console.warn("⚠️ Ingen profiler at filtrere.");
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
