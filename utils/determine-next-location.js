export default function determineNextLocation(landmark) {
    // get index of location in array
    let landmarkIndex = choices.indexOf(choicesDescription);
    landmarkIndex++;
    if (landmarkIndex < choices.length) {
        const nextLandmark = '../game-play/?id=' + choices[landmarkIndex].id;
        return nextLandmark;
    }
}