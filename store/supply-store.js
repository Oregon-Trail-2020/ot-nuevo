import { getState, saveState } from '../utils/local-storage.js';

const searchParams = new URLSearchParams(window.location.search);
let landmarkSubArray = Number(searchParams.get('id'));


const button = document.getElementById('buy-key');
const money = document.getElementById('character-money');
const trunkButton = document.getElementById('trunk-button');
const input = document.querySelector('input');
const USER = 'USER';
const currentMoney = getState(USER);
money.textContent = `$${currentMoney.money}`;

button.addEventListener('click', () => {
    const userPick = Number(input.value);
    const currentInventory = getState(USER);

    if (userPick === 1) {
        currentInventory.food = currentInventory.food + 10;
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
});

if (landmarkSubArray === null) {
    landmarkSubArray = 0;
}
console.log(landmarkSubArray);

trunkButton.addEventListener('click', () => {
    window.location.href = `../location/location.html?id=${landmarkSubArray}`;

});