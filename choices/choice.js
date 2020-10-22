import { landmark } from '../data/data.js';
import { getState } from '../utils/local-storage.js';

const input = document.querySelector('input');
const button = document.getElementById('enter-key');
const ol = document.getElementById('generatedUserChoices');

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
///////////////////////////////////
/*const weatherDiv = document.getElementById('weather');
const energyDiv = document.getElementById('energy');
const foodDiv = document.getElementById('food');

weatherDiv.textContent = user.weather;
energyDiv.textContent = user.energy;
foodDiv.textContent = user.food;*/

const user = getState('user');
const searchParams = new URLSearchParams;
const id = searchParams.get('id');

/*let i;
if (id === user.choices) {
    i = 0;
} else if (id === user.choice) {
    i = 1;   
} else if (id === user.choice) {
    i = 2;
}*/
const choices = landmark[0].choices;

for (let i = 0; i < choices.length; i++) {
    const choice = choices[i];
   console.log(choice); 
  const choiceAppend = createChoice(choice);
    ol.appendChild(choiceAppend);
    
}

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