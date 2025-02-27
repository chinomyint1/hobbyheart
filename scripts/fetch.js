export const fetchProfiles = async () => {
    try {
        const response = await fetch ("../data/profil.json")
        const profiles = await response.json()
        return profiles 
    } catch {
        console.error ("Error fetching or parsing data", error)
    }
}