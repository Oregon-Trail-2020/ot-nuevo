import { getState } from '../utils/local-storage.js';

const button = document.getElementById('enter-key');
const input = document.querySelector('input');
const trunkMoney = document.getElementById('trunk-money');
const trunkFood = document.getElementById('trunk-food');
const trunkEnergy = document.getElementById('trunk-energy');
const trunkRepairKit = document.getElementById('trunk-repair-kit');
const trunkAAA = document.getElementById('trunk-aaa');

const user = 'USER';

// would have liked to see this living in metadata somewhere
const locations = [
    '../location/location.html',
    '../map/map.html',
    '../store/supply-store.html'
];
button.addEventListener('click', () => {
    const userPick = Number(input.value);

    window.location.href = locations[userPick - 1];
});

const trunkState = getState(user);

trunkMoney.textContent = `$${trunkState.money}`;
trunkEnergy.textContent = trunkState.energy;
trunkFood.textContent = `${trunkState.food}lbs`;
trunkRepairKit.textContent = trunkState.RepairKit;
trunkAAA.textContent = trunkState.aaa;
