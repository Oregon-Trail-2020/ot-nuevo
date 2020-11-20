import { saveState } from '../utils/local-storage.js';
import { character } from '../data/character-data.js';

const button = document.getElementById('enter-key');
const input = document.querySelector('input');

button.addEventListener('click', () => {
    const characterPick = Number(input.value);
    const userKey = 'USER';

    const user = {
        // the index can bed devied from the characterPick by subtracting 1
        name: character[characterPick - 1].name,
        energy: character[characterPick - 1].energy,
        food: 0,
        money: character[characterPick - 1].money,
        aaa: 0,
        RepairKit: 0,
        complete: {}
    };
    saveState(userKey, user);
    window.location.href = '../store/supply-store.html';
});
