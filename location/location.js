import { updateView } from '../utils/update-view.js';

updateView();

// Add complete === true
export function scoreLocation(choice, landmarkId, user) {
    // add baddog to dog according to the choice's consequences
    user.energy += choice.energy;
    // add treats to the user according to the choices consqencuewbnf
    user.food -= choice.food;
    // set this adventure id to completed in the user
    user.completed[landmarkId] = true;
}




const button = document.getElementById('space-bar');

button.addEventListener('click', () => {
    window.location.href = '../choices/choices.html';
});
