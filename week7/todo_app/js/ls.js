//local storage helper functions for todo app.
function writeToLS(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

function readFromLS(key, type=false) {
    if (type) {
        return JSON.parse(localStorage.getItem(key)).filter(item => item.completed == type);
    } else if (type == false) {
        let activeTasks = []
        for (const item of JSON.parse(localStorage.getItem(key))) {

        }
    } else if (type == "") {
        return JSON.parse(localStorage.getItem(key))
    }
}

export {
    writeToLS,
    readFromLS
}