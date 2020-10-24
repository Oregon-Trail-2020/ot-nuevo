
import { saveState, getState } from './local-storage.js';

export function addStuff(inEnergy, inFood) {   
    const user = getState('USER');
    user.energy = user.energy + inEnergy;
    user.food = user.food + inFood;
    saveState('USER', user);
}