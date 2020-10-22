import updateView from '../utils/update-view.js';
import { landmark } from '../data/data.js';
import { getState } from '../utils/local-storage.js';
// User sees the image and description and choices that corresponds to the location
const image = document.getElementById('landmark-image');
const landmarkDescription = document.getElementById('landmark-description');
const ol = document.getElementById('choice-list');
const resultDescription = document.getElementById('result-description');
const button = document.getElementById('enter-key');
const userInput = document.getElementById('user-input');

    // Display current state for user
updateView();
    // grab the search params and use them to get the location from the data array
const user = getState('user');
const searchParams = new URLSearchParams(window.location.search);
const landmarkSubArray = searchParams.get('id');
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

// On click of enter button one of two things happens 
button.addEventListener('click', () => {

});
    // One through 2 link to a new page
    // three and five affect state and show a results div
        // The search param grabs the result from the data array and displays the result
        // The search param changes state and state view
            //  Change complete to true and add check to map
            // check if allChecked or dead and send to results page
        // setTimeOut lets the user read result before sending them to the next location
            // The search params moves user to the next location
