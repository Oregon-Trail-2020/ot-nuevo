import { getState } from '../utils/local-storage.js';

const button = document.getElementById('enter-key');
const input = document.querySelector('input');
const trunkMoney = document.getElementById('trunk-money');
const trunkFood = document.getElementById('trunk-food');
const trunkEnergy = document.getElementById('trunk-energy');
const trunkRepairKit = document.getElementById('trunk-repair-kit');
const trunkAAA = document.getElementById('trunk-aaa');

const user = 'USER';

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

const trunkState = getState(user);

trunkMoney.textContent = `$${trunkState.money}`;
trunkEnergy.textContent = trunkState.energy;
trunkFood.textContent = trunkState.food;
trunkRepairKit.textContent = trunkState.RepairKit;
trunkAAA.textContent = trunkState.aaa;
