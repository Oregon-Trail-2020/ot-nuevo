
export function scoreLocation(landmarkId, user) {
    // user.energy += choice.energy;
    // user.food -= choice.food;
    // set this landmark id to completed on map
    user.completed[landmarkId] = true;
}
