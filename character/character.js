import { saveState } from '../utils/local-storage.js';

const button = document.getElementById('enter-key');
const input = document.querySelector('input');

button.addEventListener('click', () => {
    const characterPick = Number(input.value);

    if (characterPick === 1) {
        const user = {
            name: data.get('name'),
            character: data.get('character'),
            energy: 100,
            food: 0,
            money: 1000,
            aaa: 0,
            complete: {}
        };
        {
            saveState(user);
        }
        if (characterPick === 2) {
            const user = {
                name: data.get('name'),
                character: data.get('character'),
                energy: 100,
                food: 0,
                money: 1500,
                aaa: 0,
                complete: {}
            };
            {
                saveState(user);
            }
            if (characterPick === 3) {
                const user = {
                    name: data.get('name'),
                    character: data.get('character'),
                    energy: 100,
                    food: 0,
                    money: 700,
                    aaa: 0,
                    complete: {}
                };
                {
                    saveState(user);
                }
                if (characterPick === 4) {
                    const user = {
                        name: data.get('name'),
                        character: data.get('character'),
                        energy: 100,
                        food: 0,
                        money: 500,
                        aaa: 0,
                        complete: {}
                    };
                    {
                        saveState(user);
                    }
                    window.location.href = '../store/supply-store.html';
                });
