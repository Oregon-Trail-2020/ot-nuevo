

export function hasCompletedAllLocations(landmark, theUser) {
    for (let i = 0; i < landmark.length; i++) {
        const location = landmark[i];

        if (!theUser.completed[landmark.id]) {
            return false;
        }
    }
    return true;
}