import { getState } from './local-storage.js';

const user = 'USER';

function updateView() {
    const energy = document.getElementById('energy');
    const food = document.getElementById('food');

    const updateState = getState(user);

    energy.textContent = updateState.energy;
    food.textContent = updateState.food;
}

export default updateView;




