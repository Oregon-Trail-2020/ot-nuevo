import { updateView } from '../utils/update-view.js';

updateView();

export function scoreLocation(landmarkId, user) {
    // user.energy += choice.energy;
    // user.food -= choice.food;
    // set this landmark id to completed on map
    user.completed[landmarkId] = true;
}




const button = document.getElementById('space-bar');

button.addEventListener('click', () => {
    window.location.href = '../choices/choices.html';
});
