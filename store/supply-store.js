import { getState, saveState } from '../utils/local-storage.js';

const button = document.getElementById('enter-key');
const trunkButton = document.getElementById('trunk-button');
const input = document.querySelector('input');
const USER = 'USER';


button.addEventListener('click', () => {
    const userPick = Number(input.value);
    const currentInventory = getState(USER);

    if (userPick === 1) {
        currentInventory.food ++;
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

trunkButton.addEventListener('click', () => {
    window.location.href = '../trunk/trunk.html';
});