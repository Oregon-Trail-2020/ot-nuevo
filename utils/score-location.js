
// hmm, seems like more of the food, aaa, repair kit, and money logic should live in here
export function scoreLocation(landmarkId, user) {
    // set this landmark id to completed on map
    user.complete[landmarkId] = true;
}
