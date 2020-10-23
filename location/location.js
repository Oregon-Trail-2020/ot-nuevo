import updateView from '../utils/update-view.js';
import { landmark } from '../data/data.js';
import { getState } from '../utils/local-storage.js';
import { addStuff } from '../utils/add.js';
import isDead from '../utils/is-dead.js';
import { hasCompletedAllLocations } from '../map/map-all-completed.js';

// User sees the image and description and choices that corresponds to the location
// const image = document.getElementById('landmark-image');
const landmarkDescription = document.getElementById('landmark-description');
const ol = document.getElementById('choice-list');
const resultDescription = document.getElementById('result-description');
const button = document.getElementById('enter-key');
const userInput = document.getElementById('user-input');
console.log(resultDescription);
    // Display current state for user
updateView();

    // grab the search params and use them to get the location from the data array
const user = getState('USER');
console.log(user);
const searchParams = new URLSearchParams(window.location.search);
const landmarkSubArray = searchParams.get('id');
let nextLandmark = Number(landmarkSubArray) + 1;
    //Use that data array to display the image description and choices 

// image.src = '../assets' + landmark[landmarkSubArray].image;
landmarkDescription.textContent = landmark[landmarkSubArray].description;

function createChoice(choice) {
    const li = document.createElement('li');
    li.textContent = choice.description;
    return li;
}

for (let i = 0; i < landmark[landmarkSubArray].choices.length; i++) {
    let choice = landmark[landmarkSubArray].choices[i];
    const li = createChoice(choice);
    ol.appendChild(li);
}
    console.log();
// On click of enter button one of two things happens 
console.log(landmark[landmarkSubArray].choices[3].result);

button.addEventListener('click', () => {
    // get data from users input choice 
    const userPick = Number(userInput.value);


    if (userPick === 1) {
        window.location.href = `../map/map.html?id=${landmarkSubArray}`;
    }
    if (userPick === 2) {
        window.location.href = `../store/supply-store.html?id=${landmarkSubArray}`;
    }
    if (userPick === 3) {
        resultDescription.textContent = landmark[landmarkSubArray].choices[2].result;
        addStuff(landmark[landmarkSubArray].choices[2].energy, landmark[landmarkSubArray].choices[2].food);
        
        
        // window.location.href = './map/map.html';
    }
    if (userPick === 4) {
        resultDescription.textContent = landmark[landmarkSubArray].choices[3].result;
        addStuff(landmark[landmarkSubArray].choices[3].energy, landmark[landmarkSubArray].choices[3].food);
        // window.location.href = './map/map.html';
    }
    if (userPick === 5) {
        resultDescription.textContent = landmark[landmarkSubArray].choices[4].result;
        addStuff(landmark[landmarkSubArray].choices[4].energy, landmark[landmarkSubArray].choices[4].food);
        // window.location.href = './map/map.html';
    }
    // display result div

    // set timeout 
    setTimeout(() => {
        if (isDead(user)) {
            return window.location.href = '../result/result.html';
        }
        if (hasCompletedAllLocations(landmark, user)) {
            return window.location.href = '../result/result.html';
        }
        window.location.href = `../location/location.html?id=${nextLandmark}`;
    }, 5000);  
    
    // update state and view function
    // setting user completed function - scoreLocation <--- this sets to completed [true]
    
        // if statement if user dies or completes the game that take user to results
        // else statement direct to next location     


});
    // One through 2 link to a new page
    // three and five affect state and show a results div
        // The search param grabs the result from the data array and displays the result
        // The search param changes state and state view
            //  Change complete to true and add check to map
            // check if allChecked or dead and send to results page
        // setTimeOut lets the user read result before sending them to the next location
            // The search params moves user to the next location
