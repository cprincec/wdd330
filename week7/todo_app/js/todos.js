import { writeToLS, readFromLS } from "./ls.js";
import { updateTotalTask } from "./utilities.js";
import { renderTodos } from "./utilities.js";
class Todo {
    constructor(parentTag, taskInputTag) {
        this.todo = taskInputTag.value; //store value of task input 
        this.parentTag = parentTag; // the parent tag where all tasks will be contained.
        this.key = "todoList";
        this.todoList = readFromLS(this.key, "") || [];
    }

    createTodo() {
        if (this.todo) {
            const todo = {
                content: this.todo,
                id: new Date(),
                completed: false
            };
            this.todoList.push(todo);
        } else {
            alert("please enter a task");
        }
        writeToLS(this.key, this.todoList);
        this.renderAllTodos()
    }

    renderAllTodos() {
        renderTodos(this.parentTag, this.todoList)
        this.toggleCompleteTodo();
        this.addListener();
        this.removeTask();
        updateTotalTask(this.parentTag);
    }

    renderActiveTodos() {
        renderTodos(this.parentTag, readFromLS(this.key))
        this.addListener();
        this.toggleCompleteTodo();
        this.removeTask();
        updateTotalTask(this.parentTag);
    }

    renderCompletedTodos() {
        renderTodos(this.parentTag, readFromLS(this.key, true))
        this.toggleCompleteTodo();
        this.removeTask();
        updateTotalTask(this.parentTag);
    }

    removeTask() {
        document.querySelectorAll(".delete-task").forEach((btn, index) => {
            btn.addEventListener("click", (e) => {
                console.log(index);
                this.todoList.splice(index, 1);
                writeToLS(this.key, this.todoList);
                this.renderAllTodos();
            })
        })
        updateTotalTask(this.parentTag);
    }

    toggleCompleteTodo() {
        //this function toggles the completed property of a clicked task between true and false.
        document.querySelectorAll(".task-status").forEach((input, index) => {
            input.addEventListener("click", (e) => {
                console.log(e);
                // Check if task has already bee marked as completed then toggle it to incomplete
                if (this.todoList[index].completed) {
                    this.todoList[index].completed = false;
                    writeToLS(this.key, this.todoList);
                    input.checked = false;
                } // Check if task has already bee marked as completed then toggle it to complete
                else {
                    this.todoList[index].completed = true;
                    writeToLS(this.key, this.todoList);
                    input.checked = true;
                    
                }
                this.addListener();
                updateTotalTask(this.parentTag);
            })
        })

    }

    addListener() {
        if (this.todoList) {
            let allTasks = document.querySelector("#tasks").children;
            
            allTasks = [...allTasks];
            console.log(allTasks);
            allTasks.forEach((todo, index) => {
                let taskStatus = todo.children[0];
                console.log(taskStatus);
                if (this.todoList[index].completed) {
                    console.log(`task ${index} completed`, taskStatus);
                    taskStatus.nextElementSibling.classList.add("completed");
                } else {
                    console.log("incomplete", taskStatus);
                    taskStatus.nextElementSibling.classList.remove("completed");
                    
                }
                updateTotalTask(this.parentTag);
            })
        }
    }
}

export {
    Todo
}