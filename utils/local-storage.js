const STATE = 'STATE';

// LOCAL STORAGE FUNCTION FOR DOM VIEW UPDATE
export function getState(key) {
    const stringyItem = localStorage.getItem(key);

    return JSON.parse(stringyItem);
}

export function saveState(key, value) {
    const stringyItem = JSON.stringify(value);

    localStorage.setItem(key, stringyItem);
}
