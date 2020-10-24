// LOCAL STORAGE FUNCTION FOR STATE VIEW UPDATE
export function getState(KEY) {
    const stringyItem = localStorage.getItem(KEY);
    return JSON.parse(stringyItem);
}

export function saveState(KEY, value) {
    const stringyItem = JSON.stringify(value);
    
    localStorage.setItem(KEY, stringyItem);
    return value;
}
