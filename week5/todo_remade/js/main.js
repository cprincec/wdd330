import { Todo } from "./todo.js";

const parentTag = document.querySelector("#tasks"); //Select ul for all tasks
let taskInputTag = document.querySelector("#task-input"); 
const addTask = document.querySelector("#add-task");
const activeTasks = document.querySelector("#active-tasks");
const allTasks = document.querySelector("#all-tasks");
const completedTasks = document.querySelector("#completed-tasks");

window.onload = () => {
    let todo = new Todo(parentTag, taskInputTag);
    todo.renderTasks();

    addTask.addEventListener("click", () => {
        todo = new Todo(parentTag, taskInputTag);
        todo.createTask();
        taskInputTag.value = "";
    });

    activeTasks.addEventListener("click", (e) => {
        todo.renderActiveTasks();
    });

    allTasks.addEventListener("click", (e) => {
        todo.renderTasks();
    });
    completedTasks.addEventListener("click", (e) => {
        todo.renderCompletedTasks();
    });
}


