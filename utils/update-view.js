import { getState } from './local-storage';
import { isDead } from './is-dead';



function updateView() {
     /* reference needed DOM elements */
    const weather = document.getElementById('weather');
    const energy = document.getElementById('energy');
    const food = document.getElementById('food');
    // console.log(weather, energy, food);


    /* initialize: load and parse json with state from local storage */
    const dom = getState();

    // copy data from object to DOM properties:
    weather.textContent = dom.weather;

    
    // if they're dead, say so in the header
    if (isDead()) {
        energy.textContent = 'You died.';
        food.textContent = 'You ran out of food and died.';
    }
    else {
        // otherwise show the bad dog status
        energy.textContent = dom.energy;
        food.textContent = dom.food;
    }
}

export default updateView;




