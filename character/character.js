import { setInLocalStorage } from '../utils/local-storage.js';

const button = document.getElementById('enter-key');
const input = document.querySelector('input');

button.addEventListener('click', () => {
    const characterPick = Number(input.value);

    if (characterPick === 1) {
            const user = {
                name: data.get('name'),
                character: data.get('character'),
                complete: {}
            };
            setInLocalStorage(user);
        }
    if (characterPick === 2) {
            const user = {
                name: data.get('name'),
                character: data.get('character'),
                complete: {}
            };
            setInLocalStorage(user);
        }
    if (characterPick === 3) {
            const user = {
                name: data.get('name'),
                character: data.get('character'),
                complete: {}
            };
            setInLocalStorage(user);
        }
    if (characterPick === 4) {
            const user = {
                name: data.get('name'),
                character: data.get('character'),
                complete: {}
            };
            setInLocalStorage(user);
        }
    window.location.href = '../store/supply-store.html';
});
