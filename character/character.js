import { saveState } from '../utils/local-storage.js';
import { character } from '../data/character-data.js';

const button = document.getElementById('enter-key');
const input = document.querySelector('input');



button.addEventListener('click', () => {
    const characterPick = Number(input.value);
    const userKey = 'USER';

    if (characterPick === 1) {
        const user = {
            name: character[0].name,
            energy: character[0].energy,
            food: 0,
            money: character[0].money,
            aaa: 0,
            RepairKit: 0,
            complete: []
        };
        saveState(userKey, user);
    }
    if (characterPick === 2) {
        const user = {
            name: character[1].name,
            energy: character[1].energy,
            food: 0,
            money: character[1].money,
            aaa: 0,
            RepairKit: 0,
            complete: []
        };
        saveState(userKey, user);
    }
    if (characterPick === 3) {
        const user = {
            name: character[2].name,
            energy: character[2].energy,
            food: 0,
            money: character[2].money,
            aaa: 0,
            RepairKit: 0,
            complete: []
        };
        saveState(userKey, user);
    }
    if (characterPick === 4) {
        const user = {
            name: character[3].name,
            energy: character[3].energy,
            food: 0,
            money: character[3].money,
            aaa: 0,
            RepairKit: 0,
            complete: []
        };
        saveState(userKey, user);
    }
    window.location.href = '../store/supply-store.html';
});
