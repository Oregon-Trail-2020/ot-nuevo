import { getState, saveState } from '../utils/local-storage.js';

const searchParams = new URLSearchParams(window.location.search);
let landmarkSubArray = Number(searchParams.get('id'));


const button = document.getElementById('buy-key');
const money = document.getElementById('character-money');
const characterFood = document.getElementById('character-food');
const trunkButton = document.getElementById('trunk-button');
const input = document.querySelector('input');
const USER = 'USER';
const currentState = getState(USER);
money.textContent = ` $${currentState.money}`;
characterFood.textContent = ` ${currentState.food} items`;


button.addEventListener('click', () => {
    const userPick = Number(input.value);
    const currentInventory = getState(USER);

    if (userPick === 1) {
        currentInventory.food = currentInventory.food + 15;
        currentInventory.money = currentInventory.money - 10;
        saveState(USER, currentInventory);
    }
    if (userPick === 2) {
        currentInventory.RepairKit ++;
        currentInventory.money = currentInventory.money - 100;
        saveState(USER, currentInventory);
    }
    if (userPick === 3) {
        currentInventory.aaa ++;
        currentInventory.money = currentInventory.money - 200;
        saveState(USER, currentInventory);
    }
    money.textContent = `$${currentInventory.money}`;
    characterFood.textContent = `${currentInventory.food} items`;
});

if (landmarkSubArray === null) {
    landmarkSubArray = 0;
}

trunkButton.addEventListener('click', () => {
    window.location.href = `../location/location.html?id=${landmarkSubArray}`;

});