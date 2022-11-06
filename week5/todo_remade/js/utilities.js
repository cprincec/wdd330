function tasksCount(parentElement) {
    console.log(parentElement.children.length)
    return `${parentElement.children.length} ${parentElement.children.length == 0 || parentElement.children.length == 1 ? "task" : "tasks"}`;
}

export {
    tasksCount
}

