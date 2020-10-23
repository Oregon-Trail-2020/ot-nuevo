import { getState } from './local-storage.js';

const user = 'USER';

function updateView() {
     /* reference needed DOM elements */
    const energy = document.getElementById('energy');
    const food = document.getElementById('food');

    /* initialize: load and parse json with state from local storage */
    const updateState = getState(user);

    energy.textContent = updateState.energy;
    food.textContent = updateState.food;
}

export default updateView;




