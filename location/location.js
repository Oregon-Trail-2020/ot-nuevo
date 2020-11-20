import updateView from '../utils/update-view.js';
import { landmark as landmarks } from '../data/data.js';
import { getState, saveState } from '../utils/local-storage.js';
import { addStuff } from '../utils/add.js';
import isDead from '../utils/is-dead.js';
import { hasCompletedAllLocations } from '../map/map-all-completed.js';
import { scoreLocation } from '../utils/score-location.js';

// User sees the image and description and choices that corresponds to the location
const image = document.getElementById('landmark-image');
const landmarkDescription = document.getElementById('landmark-description');
const ol = document.getElementById('choice-list');
const resultDescription = document.getElementById('result-description');
const button = document.getElementById('enter-key');
const userInput = document.getElementById('user-input');
    // Display current state for user
updateView();
const USER = 'USER';
    // grab the search params and use them to get the location from the data array
const searchParams = new URLSearchParams(window.location.search);
const landmarkId = searchParams.get('id');
let nextLandmarkId = Number(landmarkId) + 1;
    //Use that data array to display the image description and choices 

const landmark = landmarks[landmarkId];

image.src = '../assets/location/' + landmark.image;
landmarkDescription.textContent = landmark.description;

function createChoice(choice) {
    const li = document.createElement('li');
    li.textContent = choice.description;
    return li;
}
// if there are no choices then we are going to first add complete via allCompleted()
// navigate to results page
if (landmark.choices === undefined || landmark.choices === null) {
    updateView();
    const newUser = getState('USER');
    getState(newUser);
    hasCompletedAllLocations(landmark, newUser); 
    setTimeout(() => {
        return window.location.href = '../result/result.html';
    
    }, 9000);
}

for (let i = 0; i < landmark.choices.length; i++) {
    let choice = landmark.choices[i];
    const li = createChoice(choice);
    ol.appendChild(li);
}

// On click of enter button one of two things happens 
button.addEventListener('click', () => {
    // get data from users input choice 
    const userPick = Number(userInput.value);


    if (userPick === 1) {
        window.location.href = `../map/map.html?id=${landmarkId}`;
    }
    if (userPick === 2) {
        window.location.href = `../store/supply-store.html?id=${landmarkId}`;
    }

    if (userPick > 2) {
        // the index can be derived from the userPick by subtracting 1
        const index = userPick - 1;

        resultDescription.textContent = landmark.choices[index].result;
        addStuff(landmark.choices[index].energy, landmark.choices[index].food);
    }
   
    updateView();
    const newUser = getState('USER');
     // setting user completed function - scoreLocation <--- this sets to completed [true]
    scoreLocation(landmark.id, newUser);
    saveState(USER, newUser);

    // set timeout 
    setTimeout(() => {
        if (isDead(newUser)) {
            return window.location.href = '../result/result.html';
        }
        // if statement if user dies or completes the game then take user to results
        if (hasCompletedAllLocations(landmark, newUser)) {
            return window.location.href = '../result/result.html';
        }
        // else statement direct to next location  
        window.location.href = `../location/location.html?id=${nextLandmarkId}`;
    }, 1200);
});