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

export function addStuff(inMoney, inEnergy, inFood) {
    alert('money: ' + inMoney);
    alert('energy: ' + inEnergy);
    alert('food: ' + inFood);
    if (getState(stuff) === null) {
        stuff.money = inMoney;
        stuff.food = inFood;
        stuff.energy = inEnergy;
        saveState('stuff', stuff);
    } else {
        getState(stuff);
        alert('stuff-before: ' + stuff);
        stuff.money = stuff.money + inMoney;

        stuff.energy = stuff.energy + inEnergy;

        stuff.food = stuff.food + inFood;
        alert('stuff-after: ' + stuff);
        saveState('stuff', stuff);
    }

}