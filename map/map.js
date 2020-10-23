
import { landmark } from '../data/data.js';
import checkCompleted from './map-check-completed.js';
import { hasCompletedAllLocations } from './map-all-completed.js';
import { getState } from '../utils/local-storage.js';
import isDead from '../utils/is-dead.js';

// console.log(landmark);
const user = 'USER';

const changeLocation = getState(user);
const searchParams = new URLSearchParams(window.location.search);
let landmarkSubArray = Number(searchParams.get('id'));
// if (isDead(user) || hasCompletedAllLocations(landmark, user)) {
//     // send them to the results page
//     window.location = '../results/results.html';
// }

const nav = document.getElementById('map');
for (let i = 0; i < landmark.length; i++) {
    // for every location

    let li = document.createElement('li');
    li.style.top = landmark[i].map.top;
    li.style.left = landmark[i].map.left;


    const location = landmark[i];
    // console.log(location);
    // let li = null;

    // if the user has completed it
    if (changeLocation.complete[location.id]) {
        // make a completed location display (with a checkmark)
        li = checkCompleted(location);
        console.log('does this work');
    } else {
        li.textContent = landmark[i].title; 
    }
    
    nav.appendChild(li);
}

const button = document.getElementById('space-bar');

button.addEventListener('click', () => {
        // If travel has happened user goes back to choice page:
    window.location.href = `../location/location.html?id=${landmarkSubArray}`;
});