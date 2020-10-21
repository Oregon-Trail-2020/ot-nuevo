
import { landmark } from '../data/data.js';
import checkCompleted from './map-check-completed.js';
import { getState } from '../utils/local-storage.js';

// console.log(landmark);

const user = getState();
// const user = { complete:['san-diego'] === true };

const nav = document.getElementById('map');
for (let i = 0; i < landmark.length; i++) {
    // for every adventure
    // console.log(landmark[i].title);
    let li = document.createElement('li');
    li.style.top = landmark[i].map.top;
    li.style.left = landmark[i].map.left;
    // console.log(landmark[i]);

    const location = landmark[i];
    // let li = null;

    // if the dog has completed it
    if (user.complete[location.id]) {
        // make a completed location display (with a checkmark)
        li = checkCompleted(location);
    } else {
        li.textContent = landmark[i].title; 
    }
    // console.log(li);
    nav.appendChild(li);
}