import { landmark } from '../data/data.js';
import { getState, saveState, scoreLocation } from '../utils/local-storage.js';
import updateView from '../utils/update-view.js';
import { findById } from '../utils/find-by-id.js';
import isDead from '../utils/is-dead.js';
import { hasCompletedAllLocations } from '../map/map-all-completed.js';

updateView();

const user = getState('user');
const searchParams = new URLSearchParams(window.location.search);
const id = searchParams.get('id');
// const location = findById(landmark, cityId);

const input = document.querySelector('input');
const button = document.getElementById('enter-key');
const ol = document.getElementById('generatedUserChoices');
const image = document.getElementById('landmark-image');
const choiceInput = document.getElementById('choice-input');
const choice4 = document.getElementById('choice-4');
const choice5 = document.getElementById('choice-5');
const choice6 = document.getElementById('choice-6');
const description = document.getElementById('description');
const result = document.getElementById('result');

image.src = '../assets/' + landmark.image;
description.textContent = landmark.description;


for (let i = 0; i < landmark.length; i++) {
    const land = landmark[i];
    landmark.appendChild(land);
}

// function to append city specific choices to UI
function createChoice(choice) {
    const label = document.createElement('label');
    label.classList.add('input');

    const radio = document.createElement('input');
    radio.type = 'radio';
    radio.name = 'input';
    radio.required = true;
    radio.value = choice.id;
    label.appendChild(radio);
    
    const description = document.createElement('span');
    description.textContent = choice.description;
    label.appendChild(description);

    return label;
}

createChoice(landmark[0].choices[0]);
// Sarah what was this getting from state?

// const searchParams = new URLSearchParams;

const choices = landmark[0].choices;

for (let i = 0; i < choices.length; i++) {
    const choice = choices[i];
    console.log(choice); 
    const choiceAppend = createChoice(choice);
    ol.appendChild(choiceAppend);
    
}

// Event listener to take in user choice and appened choce result AND updated map with checkmark to complete location
choiceInput.addEventListener('submit', function(e) {
    e.preventDeault();

    // get data from users inputed choice 
    const choiceData = new ChoiceData(choiceInput);
    const choiceId = choiceData.get('choice');

    const choice = findById(landmark.choices, choiceId);

    // get map location state out of local storage
    const mapState = getState();
    // generate a checkmark and manipulate map state
    scoreLocation(choice, landmark.id, mapState);

    // save checked map location state to local storage
    saveState(mapState);

    // Update user view with hiden choice result
    choiceInput.classList.add('hidden');
    result.classList.remove('hidden');
    result.textContent = choice.results;

    if (isDead(user) || hasCompletedAllLocations(landmark, user)) {
        window.location.href = '../results/results.html';
    }

    
    updateView();

});
///////////////////////////////////
/*const weatherDiv = document.getElementById('weather');
const energyDiv = document.getElementById('energy');
const foodDiv = document.getElementById('food');

weatherDiv.textContent = user.weather;
energyDiv.textContent = user.energy;
foodDiv.textContent = user.food;*/

/*let i;
if (id === user.choices) {
    i = 0;
} else if (id === user.choice) {
    i = 1;   
} else if (id === user.choice) {
    i = 2;
}*/


////////////////////////////////////
button.addEventListener('click', () => {
    const userPick = Number(input.value);

    if (userPick === 1) {
        window.location.href = '../location/location.html';
    }
    if (userPick === 2) {
        window.location.href = '../map/map.html';
    }
    if (userPick === 3) {
        window.location.href = '../trunk/trunk.html';
    }
    if (userPick === 4) {

        window.location.href = '../location/location.html';
    }
    if (userPick === 5) {
        window.location.href = '../location/location.html';
    }
    if (userPick === 6) {
        window.location.href = '../location/location.html';
    }
  

});
////////////////////////

const choice1 = document.getElementById('choice1');
choice1.textContent = description;