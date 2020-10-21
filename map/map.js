
import { landmarks } from '../data/data.js';
import { getState } from '../utils/update-view.js';
import checkCompleted from './map-check-completed.js';


const user = getState();


const nav = document.getElementById('map-id');

for (let i = 0; i < landmarks.length; i++) {
    // for every adventure
    const location = landmarks[i];
    let locationDisplay = null;

    // if the dog has completed it
    if (user.completed[location.id]) {
        // make a completed location display (with a checkmark)
        locationDisplay = checkCompleted(location);
    } 
    nav.appendChild(locationDisplay);
}
