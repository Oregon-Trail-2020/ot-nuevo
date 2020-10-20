import { userPickFunction } from './utils/space-bar.js';

const homePick = userPickFunction();

if (homePick === 1) {
    window.location.href = './character/character.html';
}
if (homePick === 2) {
    window.location.href = './map/map.html';
}
if (homePick === 3) {
    window.location.href = './bios/bio.html';
}