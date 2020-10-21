import { getState } from '../utils/local-storage.js';

const button = document.getElementById('enter-key');
const input = document.querySelector('input');
const trunkFood = document.getElementById('trunk-food');
const trunkEnergy = document.getElementById('trunk-energy');
const trunkRepairKit = document.getElementById('trunk-repair-kit');
// const trunkFirstAid = document.getElementById('trunk-first-aid');
const trunkAAA = document.getElementById('trunk-aaa');


button.addEventListener('click', () => {
    const userPick = Number(input.value);

    if (userPick === 1) {
        window.location.href = '../location/location.html';
    }
    if (userPick === 2) {
        window.location.href = '../map/map.html';
    }
    if (userPick === 3) {
        window.location.href = '../store/store.html';
    }
});

const trunkState = getState();

trunkRepairKit.textContent = trunkState.RepairKit;
trunkFood.textContent = trunkState.food;
trunkEnergy.textContent = trunkState.energy;
// trunkFirstAid.textContent = trunkState.firstAid;
trunkAAA.textContent = trunkAAA.aaa;
