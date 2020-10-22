
const button = document.getElementById('enter-key');
const input = document.querySelector('input');

button.addEventListener('click', () => {
    const userPick = Number(input.value);

    if (userPick === 1) {
        window.location.href = './character/character.html';
    }
    if (userPick === 2) {
        window.location.href = './map/map.html';
    }
    if (userPick === 3) {
        window.location.href = './bio/bio.html';
    }
});