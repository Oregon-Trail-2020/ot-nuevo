export function getFromLocalStorage(key) {

    const item = localStorage.getItem(key);
    return JSON.parse(item);
   
}
   
   
   
export function setInLocalStorage(key, value) {
   
    const stringyItems = JSON.stringify(value);
    localStorage.setItem(key, stringyItems);
   
    return value;
   
}