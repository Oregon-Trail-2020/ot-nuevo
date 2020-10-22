

export function hasCompletedAllLocations(landmarks, theUser) {
    for (let i = 0; i < landmarks.length; i++) {
        const landmark = landmarks[i];

        if (!theUser.completed[landmark.id]) {
            return false;
        }
    }
    return true;
}