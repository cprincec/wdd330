import { Todo } from "./todos.js";
import { updateTotalTask } from "./utilities.js";

const parentTag = document.querySelector("#tasks"); //Select ul for all tasks
let taskInputTag = document.querySelector("#task-input"); 

window.onload = () => {
    let todo = new Todo(parentTag, taskInputTag);
    todo.renderAllTodos();

    document.querySelector("#add-task").addEventListener("click", () => {
        todo = new Todo(parentTag, taskInputTag);
        todo.createTodo();
        taskInputTag.value = "";
    });
    
    document.querySelector("#all-tasks").addEventListener("click", () => {
        todo.renderAllTodos();
    })
    
    document.querySelector("#active-tasks").addEventListener("click", () => {
        todo.renderActiveTodos();
    })
    
    document.querySelector("#completed-tasks").addEventListener("click", () => {
        todo.renderCompletedTodos();
    })
}

