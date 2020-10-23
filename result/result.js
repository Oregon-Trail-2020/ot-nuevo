
const restart = document.getElementById('restart');


let user =
{
    name: 'langston',
    energy: 50,
    food: 60
};
/*let stuff =
{
    money: 'langston',
    energy: 50,
    food: 60
};*/

let energy = [
    {
        id: 'high energy',
        description: 'You had a awesome trip'
    },
    {
        id: 'medium energy',
        description: 'You wore yourself out take more time for you'
    },
    {
        id: 'low energy',
        description: 'You need a coffee'
    },
];

let food = [
    {
        id: 'Your full',
        description: 'You might have ate too much'
    },
    {
        id: 'Your will need to eat soon',
        description: 'You need to eat soon or you will wither away'
    },
    {
        id: 'You hungry',
        description: 'You need to eat soon or you will wither away'
    },
];

///////////
let foods = document.getElementById('foodDiv');
let energys = document.getElementById('energyDiv');



foods.textContent = user.food;
energys.textContent = user.energy;

const results = document.getElementById('result');
let resultString;

if (user.energy >= 220) {
    resultString = energy[0].description;
} else if (user.energy < 220 && user.energy > 60) {
    resultString = energy[1].description;
} else {
    resultString = energy[2].description;
}

if (user.food >= 220) {
    resultString = resultString + ' ' + food[0].description;
} else if (user.food < 150 && user.food > 70) {
    resultString = resultString + ' ' + food[1].description;
} else {
    resultString = resultString + ' ' + food[2].description;
}
results.textContent = resultString;

///addStuff(200, 30, 40);///////temporary for test purposes

restart.addEventListener('click', () => {
    window.location.replace('../index.html');
});







