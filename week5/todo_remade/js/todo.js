import { readFromLS, writeToLS } from "./ls.js";
import { tasksCount } from "./utilities.js";

class Todo {
    constructor(tasksContainerElement, task) {
        this.parentTag = tasksContainerElement;
        this.task = task.value;
        this.tasksKey = "tasks";
        this.tasks = readFromLS(this.tasksKey) || [];
    }

    createTask() {
        if (this.task) {

            // create object of task
            const task = {
                content: this.task,
                id: new Date(),
                completed: false
            };
            this.tasks.push(task);
            //Add task to tasks array to local storage
            writeToLS(this.tasksKey, this.tasks);
            this.renderTasks(); // display all the task on webpage
        } else { alert("please enter a task.") }
    }

    renderTasks() {
        const numberOfTasks = document.querySelector("#tasks-left");
        if (this.tasks.length) {
            this.parentTag.innerHTML = "";
            this.tasks.forEach(task => this.parentTag.innerHTML += `
            <li class="task-li" id="${task.id}">
            <input disabled class="task-status">
            <p class="task-p">${task.content}</p>
            <button class="delete-task">🗑</button>
            </li>`);
            this.trackTaskStatus();
            document.querySelectorAll(".task-li").forEach(task => { task.addEventListener("click", (e) => { this.handleClicks(e) }) });
            numberOfTasks.innerHTML = tasksCount(document.querySelector("#tasks"));
            numberOfTasks.style.display = "block";
        } else {
            this.parentTag.innerHTML = `<div class="no-task">No task available</div>`;
            numberOfTasks.style.display = "none";
        }
    }

    renderActiveTasks() {
        const numberOfTasks = document.querySelector("#tasks-left");
        if (this.tasks.length) {
            this.parentTag.innerHTML = "";
            this.tasks.filter(task=> task.completed == false)
            .forEach(task => this.parentTag.innerHTML += `
            <li class="task-li" id="${task.id}">
            <input disabled class="task-status">
            <p class="task-p">${task.content}</p>
            <button class="delete-task">🗑</button>
            </li>`);
            this.trackTaskStatus();
            document.querySelectorAll(".task-li").forEach(task => { task.addEventListener("click", (e) => { this.handleClicks(e) }) });
            numberOfTasks.innerHTML = tasksCount(document.querySelector("#tasks")) + " undone";
        } else {
            this.parentTag.innerHTML = `<div class="no-task">No task available</div>`;
            numberOfTasks.style.display = "none";
        }
    }


    renderCompletedTasks() {
        const numberOfTasks = document.querySelector("#tasks-left");
        if (this.tasks.length) {
            this.parentTag.innerHTML = "";
            this.tasks.filter(task=> task.completed == true)
            .forEach(task => this.parentTag.innerHTML += `
            <li class="task-li" id="${task.id}">
            <input disabled class="task-status">
            <p class="task-p">${task.content}</p>
            <button class="delete-task">🗑</button>
            </li>`);
            this.trackTaskStatus();
            document.querySelectorAll(".task-li").forEach(task => { task.addEventListener("click", (e) => { this.handleClicks(e) }) });
            numberOfTasks.innerHTML = tasksCount(document.querySelector("#tasks")) + " completed";
        } else {
            this.parentTag.innerHTML = `<div class="no-task">No task available</div>`;
            numberOfTasks.style.display = "none";
        }
    }

    handleClicks(e) {
        if (e.target.classList.contains("delete-task")) {
            this.deleteTask(e);
            this.renderTasks(); // reload tasks list excluding deleted task.
        } else if (e.target.classList.contains("task-status")) {
            this.updateTaskStatus(e);
            writeToLS(this.tasksKey, this.tasks);
        }
    }

    deleteTask(e) {
        this.tasks.forEach((task, index) => {
            if (task.id == e.target.parentElement["id"]) {
                this.tasks.splice(index, 1); // remove task at current index (i.e the task clicked on)
                writeToLS(this.tasksKey, this.tasks);
            }
        })
    }

    updateTaskStatus(e) {
        this.tasks.forEach(task => {
            if (task.id == e.target.parentElement["id"]) {
                // mark tasks as completed or not
                if (task.completed == false) {
                    task.completed = true;
                } else if (task.completed == true) {
                    task.completed = false;
                }
            }
        })
        this.trackTaskStatus();
    }

    trackTaskStatus() {
        // add a checkmark to task status box if a task is completed
        // remove the checkmark if the task is not completed
        // this function targets the status class of the task element (either true or false)
        // the status class of the task element is updated by the strikeTask function.
        
        this.strikeTask();
        if (this.parentTag.children) {
            document.querySelectorAll(".true").forEach(element => {
                let status =  element.previousElementSibling;
               status.value = "✔";
               status.classList.add("marked");

            });
            document.querySelectorAll(".false").forEach(element => {
                let status =  element.previousElementSibling;
               status.value = "";
               status.classList.remove("marked");
            });
        }
    }

    strikeTask() {

        // Add the true or false class to a task to indicate when task is completed
        this.tasks.forEach(task => {
            // console.log([...this.parentTag.children]);
            [...this.parentTag.children].forEach(element => {
                if (task.id == element["id"]) {
                    if (task.completed == true) {
                        element.children[1].classList.add("true");
                        element.children[1].classList.remove("false");
                    } else if (task.completed == false) {
                        element.children[1].classList.add("false");
                        element.children[1].classList.remove("true");
                    }
                }
            })
        })
    }
}



export {
    Todo
}