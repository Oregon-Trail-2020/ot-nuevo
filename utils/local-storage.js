const STATE = 'STATE';


export function getFromLocalStorage(key) {

    const item = localStorage.getItem(key);
    return JSON.parse(item);

}

export function setInLocalStorage(key, value) {

    const stringyItems = JSON.stringify(value);
    localStorage.setItem(key, stringyItems);

    return value;

}

// LOCAL STORAGE FUNCTION FOR DOM VIEW UPDATE

export function saveState(state) {
    const stringyState = JSON.stringify(state);

    localStorage.setItem(STATE, stringyState);
}

export function getState() {
    const stringyState = localStorage.getItem(STATE);

    return JSON.parse(stringyState);
} 

