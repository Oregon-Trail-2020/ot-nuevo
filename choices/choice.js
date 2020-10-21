import { landmark } from '../data/data.js';
const input = document.querySelector('input');

const button = document.getElementById('enter-key');


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
});