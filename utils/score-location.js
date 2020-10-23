
export function scoreLocation(landmarkId, user) {
    // set this landmark id to completed on map
    user.complete[landmarkId] = true;
}
