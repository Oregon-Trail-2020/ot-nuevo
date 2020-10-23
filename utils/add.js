//import { getState, saveState } from '../utils/local-storage';
///////something wrong with import runs other then that.

import { saveState, getState } from './local-storage.js';

//////////////stuff will be renamed to data-record.js

export function addStuff(inEnergy, inFood) {
    
    const user = getState('USER');

    user.energy = user.energy + inEnergy;

    user.food = user.food + inFood;
    saveState('USER', user);
}