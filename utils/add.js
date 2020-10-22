//import { getState, saveState } from '../utils/local-storage';
///////something wrong with import runs other then that.

import { saveState, getState } from './local-storage.js';

/////
let stuff =
{
    money: '1000',
    energy: 50,
    food: 60
};

//////////////stuff will be renamed to data-record.js

export function addStuff(USER, inEnergy, inFood) {

        getState(USER);

        USER.energy = USER.energy + inEnergy;

        USER.food = USER.food + inFood;
        saveState('USER', USER);
}

