
import { landmark } from '../data/data.js';
import checkCompleted from './map-check-completed.js';
import { getState } from '../utils/local-storage.js';

// console.log(landmark);

// const user = getState();
const user = { completed:[] };


// const nav = document.getElementById('map');
// for (let i = 0; i < landmark.length; i++) {
//     // for every adventure
//     console.log(landmark[i].title);
//     let span = document.createElement('span');

//     const location = landmark[i];
//     // let span = null;

//     // if the dog has completed it
//     if (user.completed[location.ititled]) {
//         // make a completed location display (with a checkmark)
//         span = checkCompleted(location);
//     } else {
//         span.textContent = landmark[i].title; 
//     }
//     console.log(span);
//     nav.appendChild(span);
// }

const nav = document.getElementById('map');
for (let i = 0; i < landmark.length; i++) {
    // for every adventure
    console.log(landmark[i].title);
    let li = document.createElement('li');

    const location = landmark[i];
    // let li = null;

    // if the dog has completed it
    if (user.completed[location.ititled]) {
        // make a completed location display (with a checkmark)
        li = checkCompleted(location);
    } else {
        li.textContent = landmark[i].title; 
    }
    console.log(li);
    nav.appendChild(li);
}