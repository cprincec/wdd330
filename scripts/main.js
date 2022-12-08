const ol = document.querySelector("#list");
const links = [
    {
        label: "Week 1 notes",
        url: "week1/index.html",
        description: "Local Storage and Master Mobile UX"
    },
    {
        label: "Week 2 notes",
        url: "week2/index.html",
        description: "Programming Basics, Arrays, Functions"
    },
    {
        label: "Week 3 notes",
        url: "./week3/index.html",
        description: "Objects, DOM, Events"
    },
    {
        label: "Week 4 notes",
        url: "./week4/index.html",
        description: "Forms, OOP, Modular JavaScript"
    },
    {
        label: "Week 5 notes",
        url: "./week5/index.html",
        description: "Testing and Debugging"
    },
    {
        label: "Week 6 Checkin",
        url: "./week5/todo_remade/index.html",
        description: "Todo app"
    },
    {
        label: "Week 7 notes",
        url: "./week7/index.html",
        description: "Further Functions, AJAX"
    },
    {
        label: "Week 8 notes",
        url: "./week8/index.html",
        description: "Transform and Transitions, Canvas, SVG, and Drag and Drop "
    },
    {
        label: "Week 9 notes",
        url: "./week9/index.html",
        description: "Window Object, HTML5 APIs"
    }
];

links.forEach(link => {
    let li = document.createElement("li");
    let a = document.createElement("a");
    let div = document.createElement("div");
    a.setAttribute("href", link.url);
    a.innerHTML = link.label;
    div.innerHTML = link.description;

    div.setAttribute("class", "description");

    li.append(a);
    li.append(div);
    ol.append(li);
});