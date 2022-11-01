function updateTotalTask(parentTag) {
    const tasksLeftHtml = document.querySelector("#tasks-left");
    tasksLeftHtml.innerHTML = `${parentTag.children.length} ${parentTag.children.length == 0 || parentTag.children.length == 1 ? "task" : "tasks"} left`;
}

function renderTodos(parentTag, todoList) {
    //taskType can be either All, Active or Completed.
    // if (taskType.toLowerCase() === "all") {
        parentTag.innerHTML = "";
        todoList.forEach(todo => parentTag.innerHTML += `
        <li class="task-li">
        <input type="checkbox" class="task-status">
        <p class="task-p">${todo.content}</p>
        <button class="delete-task">X</button>
        </li>`);
    } // else if (taskType.toLowerCase() == "active") {
    //     console.log("active");
    //     parentTag.innerHTML = "";
    //     let activeList = todoList.filter(todo => { if (!todo.completed) { return todo } });
    //     console.log(activeList);
    //     activeList.forEach(todo => parentTag.innerHTML += `
    //     <li class="task-li">
    //     <input type="checkbox" class="task-status">
    //     <p class="task-p">${todo.content}</p>
    //     <button class="delete-task">X</button>
    //     </li>`);
    // } else if (taskType.toLowerCase() == "completed") {
    //     parentTag.innerHTML = "";
    //     todoList.filter(todo => { if (todo.completed === true) { return todo } }).forEach(todo => parentTag.innerHTML += `
    //     <li class="task-li">
    //     <input type="checkbox" class="task-status">
    //     <p class="task-p">${todo.content}</p>
    //     <button class="delete-task">X</button>
    //     </li>`);
    // }
// }



// harbert o. alakwe
// uba
// 2081525197
// #30,000

export {
    updateTotalTask,
    renderTodos
}