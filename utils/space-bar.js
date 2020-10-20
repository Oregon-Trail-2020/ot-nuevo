

export function userPickFunction() {
    const button = document.getElementById('enter-key');
    const input = document.querySelector('input');
    let userPick = 0;


    button.addEventListener('click', () => {
        userPick = Number(input.value);
        
    });
    return userPick;
}
