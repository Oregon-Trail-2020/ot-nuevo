import { getState } from '../utils/local-storage.js';
import isDead from '../utils/is-dead.js';
import { hasCompletedAllLocations } from '../map/map-all-completed.js';
import { landmark } from '../data/data.js';

const user = 'USER';

const restart = document.getElementById('restart');
const food = document.getElementById('foodDiv');
const energy = document.getElementById('energyDiv');
const results = document.getElementById('result');
const audio = document.getElementById('my_audio');

const finalUser = getState(user);
food.textContent = finalUser.food;
energy.textContent = finalUser.energy;

if (isDead(finalUser)) {
    results.textContent = 'You died!';
}
if (hasCompletedAllLocations(landmark, finalUser)) {
    results.textContent = 'You won!... no really how\'d you do that?';
}

window.onload = function() {
    audio.play();
};

restart.addEventListener('click', () => {
    window.location.replace('../index.html');
});