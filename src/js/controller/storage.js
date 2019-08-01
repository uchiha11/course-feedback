function getLocalStorage(type) {
    return JSON.parse(localStorage.getItem(type)) || {}
}

function setLocalStorage(key, id, type) {

    let obj = getLocalStorage(type);
    obj[key] = id;
    localStorage.setItem(type, JSON.stringify(obj))

}
export default {
    setLocalStorage,
    getLocalStorage
}