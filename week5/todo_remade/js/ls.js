function writeToLS(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

function readFromLS(key) {
    return JSON.parse(localStorage.getItem(key));
}

export {
    writeToLS,
    readFromLS
}
