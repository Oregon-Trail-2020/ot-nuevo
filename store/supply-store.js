import { getState, saveState } from '../utils/local-storage.js';

const searchParams = new URLSearchParams(window.location.search);
let landmarkId = Number(searchParams.get('id'));


const button = document.getElementById('buy-key');
const money = document.getElementById('character-money');
const characterFood = document.getElementById('character-food');
const trunkButton = document.getElementById('trunk-button');
const input = document.querySelector('input');
const USER = 'USER';
const currentState = getState(USER);
money.textContent = ` $${currentState.money}`;
characterFood.textContent = ` ${currentState.food} items`;

// would have liked to see this living in metadata somewhere instead of being hard coded in the code
const changes = [
    {
        food: 15,
        money: -10,
        keyToIncrement: null,
    },
    {
        food: null,
        money: -100,
        keyToIncrement: 'RepairKit',
    },
    {
        food: null,
        money: -200,
        keyToIncrement: 'aaa',
    },
];
button.addEventListener('click', () => {
    const userPick = Number(input.value);
    const currentInventory = getState(USER);
    const change = changes[userPick - 1];

    ['food', 'money'].forEach(key => {
        if (change[key]) {
            currentInventory[key] = currentInventory[key] + change[key];
        }
    });

    if (change.keyToIncrement) {
        currentInventory[change.keyToIncrement]++; // hmmm, what's going on here?
    }

    saveState(USER, currentInventory);

    money.textContent = `$${currentInventory.money}`;
    characterFood.textContent = `${currentInventory.food} items`;
});

if (landmarkId === null) {
    landmarkId = 0;
}

trunkButton.addEventListener('click', () => {
    window.location.href = `../location/location.html?id=${landmarkId}`;

});